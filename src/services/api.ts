import axios from 'axios';

const API_BASE_URL = 'https://api.duodirecte.com'; // Replace with your actual API base URL

// Function to get user grades
export const getUserGrades = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/grades/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching grades: ' + error.message);
    }
};

// Function to get user assignments
export const getUserAssignments = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/assignments/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching assignments: ' + error.message);
    }
};

// Function to synchronize user data
export const syncUserData = async (userId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/sync`, { userId });
        return response.data;
    } catch (error) {
        throw new Error('Error synchronizing data: ' + error.message);
    }
};

// Function to send a message
export const sendMessage = async (messageData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/messages`, messageData);
        return response.data;
    } catch (error) {
        throw new Error('Error sending message: ' + error.message);
    }
};