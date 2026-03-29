import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradesCard from '../components/Dashboard/GradesCard';
import AssignmentsCard from '../components/Dashboard/AssignmentsCard';
import XPProgress from '../components/Gamification/XPProgress';
import LeagueBoard from '../components/Gamification/LeagueBoard';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to DuoDirecte!</Text>
            <GradesCard />
            <AssignmentsCard />
            <XPProgress />
            <LeagueBoard />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomeScreen;