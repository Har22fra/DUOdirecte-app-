import { fetchGrades, fetchAssignments } from './api';
import { store } from '../store';
import { setGrades, setAssignments } from '../store/userSlice';

const syncService = {
    async synchronizeUserData(userId) {
        try {
            const grades = await fetchGrades(userId);
            const assignments = await fetchAssignments(userId);

            store.dispatch(setGrades(grades));
            store.dispatch(setAssignments(assignments));
        } catch (error) {
            console.error('Error synchronizing user data:', error);
        }
    }
};

export default syncService;