import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// <View></View>
// <Text></Text>
export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.city}>
        <Text style={styles.cityName}>BongDam</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'tomato'
  },
  weather: {
    flex: 3,
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 60,
    fontWeight: '500'
  },
  temp: {
    fontSize: 178,
    marginTop: 50,
  },
  description: {
    fontSize: 60,
    marginTop: -30,
  },
  day: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'teal',
  }
});

