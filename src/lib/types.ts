export type TaskStatus = 'pending' | 'done' | 'did_not_do';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface TaskAttachment {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
}

export interface Task {
  id: string;
  user_id?: string;
  title: string;
  description: string;
  notes: string;
  category_id?: string;
  status: TaskStatus;
  priority: TaskPriority;
  due_date?: string; // YYYY-MM-DD
  due_time?: string; // HH:mm
  reminder?: string; // ISO
  tags: string[];
  attachments: TaskAttachment[];
  color: string;
  order_index: number;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  user_id?: string;
  name: string;
  color: string;
  icon: string;
  created_at?: string;
}

export interface Note {
  id: string;
  user_id?: string;
  title: string;
  content: string;
  category_id?: string;
  color: string;
  is_pinned: boolean;
  is_archived: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export type SupportedLanguage = 'en' | 'pt' | 'fr' | 'es';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  language: SupportedLanguage;
  theme: 'dark' | 'light';
  timezone: string;
  created_at?: string;
}

export interface PomodoroSession {
  id: string;
  user_id?: string;
  task_id?: string;
  duration_minutes: number;
  type: 'work' | 'short_break' | 'long_break';
  completed_at: string;
}

export interface UserStreak {
  user_id?: string;
  current_streak: number;
  longest_streak: number;
  last_activity_date?: string;
  total_completed_tasks: number;
  updated_at?: string;
}

export type SortByOption = 'urgency' | 'date' | 'status' | 'category' | 'title';

export interface FilterState {
  searchQuery: string;
  categoryId?: string;
  priority?: TaskPriority | 'all';
  status?: TaskStatus | 'all';
  tag?: string;
  sortBy: SortByOption;
  sortOrder: 'asc' | 'desc';
  viewMode: 'board' | 'list';
}

export type CalendarViewType = 'day' | 'week' | 'month' | 'timeline';

export type AppNavigationTab = 'dashboard' | 'tasks' | 'calendar' | 'notes' | 'focus' | 'analytics';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'reminder' | 'deadline' | 'achievement' | 'system';
  timestamp: string;
  read: boolean;
  taskId?: string;
}
