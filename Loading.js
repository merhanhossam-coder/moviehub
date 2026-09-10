import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ message = 'Loading...' }) => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="small" color="#6C63FF" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    marginTop: 8,
    fontSize: 13,
    color: '#6B6889',
  },
});

export default Loading;
