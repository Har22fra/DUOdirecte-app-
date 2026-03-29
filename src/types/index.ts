export interface User {
    id: string;
    username: string;
    email: string;
    avatarUrl?: string;
    grades: Grade[];
    assignments: Assignment[];
}

export interface Grade {
    subject: string;
    score: number;
    date: string;
}

export interface Assignment {
    title: string;
    dueDate: string;
    completed: boolean;
}

export interface XPProgress {
    currentXP: number;
    level: number;
    nextLevelXP: number;
}

export interface League {
    rank: number;
    userId: string;
    xp: number;
}

export interface Notification {
    id: string;
    message: string;
    date: string;
    read: boolean;
}