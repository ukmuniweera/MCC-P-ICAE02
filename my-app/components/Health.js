import React from 'react'
import { ScrollView, View } from 'react-native';

export default function Health({route}) {
  const { student } = route.params;

  return (
    <ScrollView>
      <View>
        <Text>{student.name}</Text>
      </View>
    </ScrollView>
  )
}
