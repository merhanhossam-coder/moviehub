import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CTASection = () => {
  return (
    <View style={styles.ctaSection}>
      <Text style={styles.ctaTitle}>Start Your Journey Today</Text>
      <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
        <Text style={styles.ctaButtonText}>Download the App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ctaSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2D2A4A',
    marginBottom: 18,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#2D2A4A',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 30,
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default CTASection;
