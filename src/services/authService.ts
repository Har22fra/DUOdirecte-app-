import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

interface User {
    id: string;
    username: string;
    email: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        dispatch(loginSuccess(response.data));
    } catch (error) {
        console.error('Login failed:', error);
    }
};

export const signup = (username: string, email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { username, email, password });
        dispatch(loginSuccess(response.data));
    } catch (error) {
        console.error('Signup failed:', error);
    }
};

export default authSlice.reducer;