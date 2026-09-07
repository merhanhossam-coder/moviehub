import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const features = [
  {
    id: '1',
    title: 'Guided Sessions',
    desc: 'Hundreds of guided meditations for every mood.',
    icon: 'https://placehold.co/60x60/6C63FF/FFFFFF?text=%E2%98%AF',
  },
  {
    id: '2',
    title: 'Sleep Stories',
    desc: 'Drift off with calming stories and soundscapes.',
    icon: 'https://placehold.co/60x60/6C63FF/FFFFFF?text=%F0%9F%8C%99',
  },
  {
    id: '3',
    title: 'Daily Reminders',
    desc: 'Build a consistent mindfulness habit.',
    icon: 'https://placehold.co/60x60/6C63FF/FFFFFF?text=%E2%8F%B0',
  },
];

const Features = () => {
  return (
    <View style={styles.featuresSection}>
      <Text style={styles.sectionTitle}>Why MindfulMe</Text>
      {features.map(item => (
        <View style={styles.featureCard} key={item.id}>
          <Image style={styles.featureIcon} source={{ uri: item.icon }} />
          <View style={styles.featureTextWrapper}>
            <Text style={styles.featureTitle}>{item.title}</Text>
            <Text style={styles.featureDesc}>{item.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  featuresSection: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2D2A4A',
    marginBottom: 16,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    marginRight: 16,
  },
  featureTextWrapper: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D2A4A',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 13,
    color: '#6B6889',
    lineHeight: 18,
  },
});

export default Features;
