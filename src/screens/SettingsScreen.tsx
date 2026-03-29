import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

    const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
    const toggleDarkMode = () => setDarkModeEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.settingItem}>
                <Text style={styles.settingText}>Enable Notifications</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={toggleNotifications}
                />
            </View>
            <View style={styles.settingItem}>
                <Text style={styles.settingText}>Dark Mode</Text>
                <Switch
                    value={darkModeEnabled}
                    onValueChange={toggleDarkMode}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    settingText: {
        fontSize: 18,
    },
});

export default SettingsScreen;