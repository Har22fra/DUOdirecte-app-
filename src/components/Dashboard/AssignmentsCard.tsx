import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AssignmentsCard = () => {
    // Sample data for assignments
    const assignments = [
        { id: 1, title: 'Math Homework', dueDate: '2023-10-15', status: 'Incomplete' },
        { id: 2, title: 'Science Project', dueDate: '2023-10-20', status: 'Complete' },
        { id: 3, title: 'History Essay', dueDate: '2023-10-25', status: 'Incomplete' },
    ];

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Assignments</Text>
            {assignments.map(assignment => (
                <View key={assignment.id} style={styles.assignment}>
                    <Text style={styles.assignmentTitle}>{assignment.title}</Text>
                    <Text style={styles.assignmentDetails}>Due: {assignment.dueDate}</Text>
                    <Text style={styles.assignmentStatus}>{assignment.status}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    assignment: {
        marginBottom: 12,
    },
    assignmentTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    assignmentDetails: {
        fontSize: 14,
        color: '#555',
    },
    assignmentStatus: {
        fontSize: 14,
        color: '#007BFF',
    },
});

export default AssignmentsCard;