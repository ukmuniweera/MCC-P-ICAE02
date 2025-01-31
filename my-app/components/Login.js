import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { students } from './StudentsDb'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [inputUserName, setInputUserName] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigation = useNavigation();

    const handleLogin = () => {
        const student = students.find(student => student.username === inputUserName && student.password === inputPassword);
        if (student) {
            setError('');
            navigation.navigate('ProfileTap',{student})
        } else {
            setError('Invalid username or password');
        }
    }

    return (
        <View>
            <Text> Student Login </Text>
            <TextInput placeholder='Enter Name: ' value={inputUserName} onChangeText={setInputUserName} />
            <TextInput placeholder='Enter Password: ' value={inputPassword} onChangeText={setInputPassword} />
            <Button title='Login' onPress={handleLogin} />
            <Text> {error} </Text>
        </View>
    )
}
