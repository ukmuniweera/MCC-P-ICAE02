import React, { useEffect, useState } from 'react'
import { healthTracks } from './StudentsDb';
import { Image, ScrollView, Text } from 'react-native';

export default function BMI({ route }) {
  const [range, setRange] = useState('');
  const [figure, setFigure] = useState();

  const { student } = route.params;
  const health = healthTracks.find(health => health.student_id === student.id);
  const bmi = (health.weight / (health.height * health.height)) * 10000;

  useEffect(() => {
    if (bmi < 18.5) {
      setRange('Underweight');
      setFigure(require('../assets/bmipic/bmi1.jpg'));
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setRange('Normal Weight');
      setFigure(require('../assets/bmipic/bmi6.jpg'));
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      setRange('Overweight');
      setFigure(require('../assets/bmipic/bmi2.jpg'));
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      setRange('Obesity Class I');
      setFigure(require('../assets/bmipic/bmi3.jpg'));
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      setRange('Obesity Class II');
      setFigure(require('../assets/bmipic/bmi4.jpg'));
    } else {
      setRange('Obesity Class III');
      setFigure(require('../assets/bmipic/bmi5.jpg'));
    }
  }, [bmi])

  return (
    <ScrollView>
      <Text>{student.name}'s BMI</Text>
      <Text>BMI: {bmi.toFixed(2)} | BMI Range: {range}</Text>
      <Image source={figure} />
    </ScrollView>
  )
}
