import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import { healthTracks } from './StudentsDb';

export default function Health({ route }) {
  const { student } = route.params;
  const health = healthTracks.find(health => health.student_id === student.id)

  return (
    <ScrollView>
      <View>
        <Text>{student.name}</Text>
        <Text>Last Checkup Date: {health.last_checkup}</Text>
        <Text>Health Records</Text>
        <Text>Height: {health.height}</Text>
        <Text>Weight: {health.weight}</Text>
        <Text>Heart Rate: {health.heart_rate}</Text>
        <Text>Blood Pressure: {health.blood_pressure}</Text>
        <Text>Exercise Frequency: {health.exercise_frequency}</Text>
        <Text>Dietary Preference: {health.dietary_preference}</Text>
        <Text>Medical Condition: {health.medical_conditions}</Text>
      </View>
    </ScrollView>
  )
}
