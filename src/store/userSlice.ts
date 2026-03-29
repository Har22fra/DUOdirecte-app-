import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  userData: {
    id: string;
    name: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ id: string; name: string; email: string }>) {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userData = null;
    },
    updateUser(state, action: PayloadAction<{ name?: string; email?: string }>) {
      if (state.userData) {
        state.userData = { ...state.userData, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;