import { CheckCircle2 } from 'lucide-react';

interface OutputCardProps {
  output: {
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
  };
  onAddToActionQueue: () => void;
  onSaveDecision: () => void;
  onVerifySave: () => void;
  onAuditSaveFlow: () => void;
  onCheckPersistence: () => void;
  actionQueueStatus: 'idle' | 'success';
  saveDecisionStatus: 'idle' | 'success';
  verifySaveStatus: 'idle' | 'success';
  auditStatus: 'idle' | 'success';
  persistenceStatus: 'idle' | 'success';
  auditTimestamp: string;
  persistenceTimestamp: string;
}

export default function OutputCard({
  output,
  onAddToActionQueue,
  onSaveDecision,
  onVerifySave,
  onAuditSaveFlow,
  onCheckPersistence,
  actionQueueStatus,
  saveDecisionStatus,
  verifySaveStatus,
  auditStatus,
  persistenceStatus,
  auditTimestamp,
  persistenceTimestamp,
}: OutputCardProps) {
  return (
    <div className="space-y-6">
      {/* What to Do Now */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          What to Do Now
        </h3>
        <p className="text-sm text-slate-900 leading-relaxed">{output.whatToDoNow}</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Decision
          </h3>
          <p className="text-sm text-slate-900 leading-relaxed">{output.decision}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Next Move
          </h3>
          <p className="text-sm text-slate-900 leading-relaxed">{output.nextMove}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Actions
        </h3>
        <div className="space-y-2.5">
          {output.actions.map((action, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-6 h-6 bg-slate-900 text-white rounded-md flex items-center justify-center text-xs font-semibold flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-sm text-slate-900 leading-relaxed">{action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Risk
          </h3>
          <p className="text-sm text-slate-900 leading-relaxed">{output.risk}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Priority
          </h3>
          <p className="text-sm text-slate-900 leading-relaxed">{output.priority}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Reality Check
          </h3>
          <p className="text-sm text-slate-900 leading-relaxed">{output.realityCheck}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Leverage
          </h3>
          <p className="text-sm text-slate-900 leading-relaxed">{output.leverage}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Constraint
          </h3>
          <p className="text-sm text-slate-900 leading-relaxed">{output.constraint}</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Financial Impact
          </h3>
          <p className="text-sm text-slate-900 leading-relaxed">{output.financialImpact}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Actions
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={onAddToActionQueue}
            className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
              actionQueueStatus === 'success'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {actionQueueStatus === 'success' && <CheckCircle2 className="w-4 h-4 inline mr-2" />}
            Add to Queue
          </button>

          <button
            onClick={onSaveDecision}
            className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
              saveDecisionStatus === 'success'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {saveDecisionStatus === 'success' && <CheckCircle2 className="w-4 h-4 inline mr-2" />}
            Save Decision
          </button>

          <button
            onClick={onVerifySave}
            className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
              verifySaveStatus === 'success'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {verifySaveStatus === 'success' && <CheckCircle2 className="w-4 h-4 inline mr-2" />}
            Verify Save
          </button>

          <button
            onClick={onAuditSaveFlow}
            className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all col-span-2 ${
              auditStatus === 'success'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {auditStatus === 'success' && <CheckCircle2 className="w-4 h-4 inline mr-2" />}
            Audit Save Flow
            {auditStatus === 'success' && auditTimestamp && (
              <span className="text-xs text-emerald-700 ml-2">({auditTimestamp})</span>
            )}
          </button>

          <button
            onClick={onCheckPersistence}
            className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
              persistenceStatus === 'success'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {persistenceStatus === 'success' && <CheckCircle2 className="w-4 h-4 inline mr-2" />}
            Check Persistence
            {persistenceStatus === 'success' && persistenceTimestamp && (
              <span className="text-xs text-emerald-700 ml-2">({persistenceTimestamp})</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
