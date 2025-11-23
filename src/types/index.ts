export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
}

export interface Habit {
  id: string;
  name: string;
  frequency: 'daily' | 'weekly';
  completedDates: string[]; // ISO date strings
  streak: number;
  color: string;
}

export interface MoodEntry {
  id: string;
  date: string;
  mood: 'great' | 'good' | 'neutral' | 'bad' | 'awful';
  energy: number; // 1-10
  notes?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  projectId?: string;
}

export interface Project {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'on-hold';
  progress: number; // 0-100
  deadline?: string;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  platform: string;
  progress: number; // 0-100
  totalLessons?: number;
  completedLessons?: number;
  status: 'not-started' | 'in-progress' | 'completed';
}

export interface Goal {
  id: string;
  title: string;
  type: 'short-term' | 'long-term';
  progress: number;
  deadline?: string;
}

export interface Contact {
  id: string;
  name: string;
  relationship: string;
  email?: string;
  phone?: string;
  birthday?: string;
  lastContacted?: string;
}
