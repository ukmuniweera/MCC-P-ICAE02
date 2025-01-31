import React, { useState } from 'react'
import { healthTracks } from './StudentsDb';
import { ScrollView, Text } from 'react-native';

export default function BMI({ route }) {
  const [range, setRange] = useState();
  const { student } = route.params;
  const health = healthTracks.find(health => health.student_id === student.id);
  const bmi = (health.weight/(health.height*health.height))*10000;

  return (
    <ScrollView>
      <Text>{student.name}'s BMI</Text>
      <Text>BMI: {bmi.toFixed(2)}</Text>

    </ScrollView>
  )
}
