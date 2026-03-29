import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../store/userSlice';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    const handleSave = () => {
        dispatch(updateUserProfile({ name, email }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default ProfileScreen;