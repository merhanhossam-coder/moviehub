import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Testimonial = () => {
  return (
    <View style={styles.testimonialSection}>
      <Text style={styles.sectionTitle}>What People Say</Text>
      <View style={styles.testimonialCard}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://placehold.co/80x80/E5E1FF/6C63FF?text=A' }}
        />
        <Text style={styles.testimonialText}>
          "MindfulMe changed my morning routine completely. I feel calmer
          and more focused throughout the day."
        </Text>
        <Text style={styles.testimonialName}>Amina, Cairo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testimonialSection: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2D2A4A',
    marginBottom: 16,
  },
  testimonialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 16,
  },
  testimonialText: {
    fontSize: 14,
    color: '#5C5A7A',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  testimonialName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D2A4A',
  },
});

export default Testimonial;
