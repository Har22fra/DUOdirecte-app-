import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GamificationState {
    xp: number;
    league: string;
    completedLessons: number;
}

const initialState: GamificationState = {
    xp: 0,
    league: 'Novice',
    completedLessons: 0,
};

const gamificationSlice = createSlice({
    name: 'gamification',
    initialState,
    reducers: {
        addXP(state, action: PayloadAction<number>) {
            state.xp += action.payload;
            // Logic to update league based on XP can be added here
        },
        completeLesson(state) {
            state.completedLessons += 1;
            state.xp += 10; // Example XP for completing a lesson
            // Logic to update league based on completed lessons can be added here
        },
        setLeague(state, action: PayloadAction<string>) {
            state.league = action.payload;
        },
        resetGamification(state) {
            state.xp = 0;
            state.completedLessons = 0;
            state.league = 'Novice';
        },
    },
});

export const { addXP, completeLesson, setLeague, resetGamification } = gamificationSlice.actions;

export default gamificationSlice.reducer;