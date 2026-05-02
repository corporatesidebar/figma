import { useState } from 'react';
import { Plus, Circle, CheckCircle2, Clock, Flag } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  priority: 'high' | 'medium' | 'low';
  status: 'todo' | 'in-progress' | 'done';
  dueDate: string;
  project: string;
}

export default function TasksView() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Review quarterly financial reports', priority: 'high', status: 'in-progress', dueDate: 'Today', project: 'Finance' },
    { id: 2, title: 'Prepare presentation for stakeholders', priority: 'high', status: 'todo', dueDate: 'Tomorrow', project: 'Strategy' },
    { id: 3, title: 'Update team documentation', priority: 'medium', status: 'todo', dueDate: 'Apr 26', project: 'Operations' },
    { id: 4, title: 'Review design mockups', priority: 'medium', status: 'in-progress', dueDate: 'Apr 27', project: 'Product' },
    { id: 5, title: 'Schedule team building event', priority: 'low', status: 'todo', dueDate: 'Apr 30', project: 'HR' },
    { id: 6, title: 'Complete Q2 performance reviews', priority: 'high', status: 'done', dueDate: 'Apr 23', project: 'HR' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const toggleTaskStatus = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const statusOrder: ('todo' | 'in-progress' | 'done')[] = ['todo', 'in-progress', 'done'];
        const currentIndex = statusOrder.indexOf(task.status);
        const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
        return { ...task, status: nextStatus };
      }
      return task;
    }));
  };

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: tasks.length + 1,
        title: newTaskTitle,
        priority: 'medium',
        status: 'todo',
        dueDate: 'Today',
        project: 'General'
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-chart-1';
      case 'low': return 'text-muted-foreground';
      default: return 'text-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done': return <CheckCircle2 className="w-5 h-5 text-chart-2" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-chart-1" />;
      default: return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const tasksByStatus = {
    todo: tasks.filter(t => t.status === 'todo'),
    'in-progress': tasks.filter(t => t.status === 'in-progress'),
    done: tasks.filter(t => t.status === 'done'),
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Tasks</h2>
          <p className="text-muted-foreground mt-1">Manage your work efficiently</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
            <Circle className="w-4 h-4" />
            <span className="text-sm">{tasksByStatus.todo.length} To Do</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
            <Clock className="w-4 h-4 text-chart-1" />
            <span className="text-sm">{tasksByStatus['in-progress'].length} In Progress</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-chart-2" />
            <span className="text-sm">{tasksByStatus.done.length} Done</span>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center gap-3">
          <Plus className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            className="flex-1 bg-transparent border-none outline-none"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors ${
              task.status === 'done' ? 'opacity-60' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <button onClick={() => toggleTaskStatus(task.id)} className="hover:scale-110 transition-transform">
                {getStatusIcon(task.status)}
              </button>

              <div className="flex-1">
                <h4 className={task.status === 'done' ? 'line-through text-muted-foreground' : ''}>
                  {task.title}
                </h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="px-2 py-1 bg-muted rounded">{task.project}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {task.dueDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Flag className={`w-5 h-5 ${getPriorityColor(task.priority)}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
