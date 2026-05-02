import { useState } from 'react';
import TopBar from './components/v125/TopBar';
import Sidebar from './components/v125/Sidebar';
import CommandCenter from './components/v125/CommandCenter';
import OutputCard from './components/v125/OutputCard';
import RightPanel from './components/v125/RightPanel';

interface EngineOutput {
  whatToDoNow: string;
  decision: string;
  nextMove: string;
  actions: string[];
  risk: string;
  priority: string;
  realityCheck: string;
  leverage: string;
  constraint: string;
  financialImpact: string;
}

export default function App() {
  const [output, setOutput] = useState<EngineOutput | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [actionQueueStatus, setActionQueueStatus] = useState<'idle' | 'success'>('idle');
  const [saveDecisionStatus, setSaveDecisionStatus] = useState<'idle' | 'success'>('idle');
  const [verifySaveStatus, setVerifySaveStatus] = useState<'idle' | 'success'>('idle');
  const [auditStatus, setAuditStatus] = useState<'idle' | 'success'>('idle');
  const [persistenceStatus, setPersistenceStatus] = useState<'idle' | 'success'>('idle');
  const [auditTimestamp, setAuditTimestamp] = useState<string>('');
  const [persistenceTimestamp, setPersistenceTimestamp] = useState<string>('');

  const handleRunEngine = async (input: string) => {
    setIsRunning(true);
    try {
      const response = await fetch('/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      const data = await response.json();
      setOutput(data);
    } catch (error) {
      console.error('Engine error:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const handleAddToActionQueue = async () => {
    if (!output) return;
    try {
      await fetch('/api/save-action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ actions: output.actions }),
      });
      setActionQueueStatus('success');
    } catch (error) {
      console.error('Save action error:', error);
    }
  };

  const handleSaveDecision = async () => {
    if (!output) return;
    try {
      await fetch('/api/save-decision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ decision: output.decision }),
      });
      setSaveDecisionStatus('success');
    } catch (error) {
      console.error('Save decision error:', error);
    }
  };

  const handleVerifySave = async () => {
    try {
      await fetch('/api/save-flow-status');
      setVerifySaveStatus('success');
    } catch (error) {
      console.error('Verify save error:', error);
    }
  };

  const handleAuditSaveFlow = async () => {
    try {
      await fetch('/api/run-save-audit');
      setAuditStatus('success');
      setAuditTimestamp(new Date().toLocaleTimeString());
    } catch (error) {
      console.error('Audit error:', error);
    }
  };

  const handleCheckPersistence = async () => {
    try {
      await fetch('/api/button-persistence-check');
      setPersistenceStatus('success');
      setPersistenceTimestamp(new Date().toLocaleTimeString());
    } catch (error) {
      console.error('Persistence check error:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto px-8 py-8">
            <CommandCenter
              onSubmit={handleRunEngine}
              isRunning={isRunning}
            />

            {output && (
              <OutputCard
                output={output}
                onAddToActionQueue={handleAddToActionQueue}
                onSaveDecision={handleSaveDecision}
                onVerifySave={handleVerifySave}
                onAuditSaveFlow={handleAuditSaveFlow}
                onCheckPersistence={handleCheckPersistence}
                actionQueueStatus={actionQueueStatus}
                saveDecisionStatus={saveDecisionStatus}
                verifySaveStatus={verifySaveStatus}
                auditStatus={auditStatus}
                persistenceStatus={persistenceStatus}
                auditTimestamp={auditTimestamp}
                persistenceTimestamp={persistenceTimestamp}
              />
            )}
          </div>
        </main>

        <RightPanel />
      </div>
    </div>
  );
}
