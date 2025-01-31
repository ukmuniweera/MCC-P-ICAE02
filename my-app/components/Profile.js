import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';

export default function Profile({ route }) {
    const { student } = route.params;

    return (
        <ScrollView>
            <View>
                <Image source={student.profile_pic} />
                <Text>{student.name}</Text>
                <Text>Age: {student.age} | Gender: {student.gender}</Text>
                <Text>Contact Information</Text>
                <Text>Email: {student.email}</Text>
                <Text>Phone: {student.phone}</Text>
                <Text>Address: {student.address}</Text>
                <Text>Biological Information</Text>
                <Text>Gender: {student.gender}</Text>
                <Text>Age: {student.age}</Text>
                <Text>Blood Group: {student.blood_group}</Text>
            </View>
        </ScrollView>
    )
}
