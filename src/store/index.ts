import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import gamificationReducer from './gamificationSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    gamification: gamificationReducer,
  },
});

export default store;