import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const NotificationsScreen = () => {
    const notifications = useSelector((state: RootState) => state.user.notifications);

    const renderNotificationItem = ({ item }: { item: string }) => (
        <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
            <FlatList
                data={notifications}
                renderItem={renderNotificationItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    notificationItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    notificationText: {
        fontSize: 16,
    },
});

export default NotificationsScreen;