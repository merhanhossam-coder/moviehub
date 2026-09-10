import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, children, style }) => {
  return (
    <View style={[styles.card, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E1FF',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2D2A4A',
    marginBottom: 6,
  },
});

export default Card;
