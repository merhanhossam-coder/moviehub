import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const Hero = () => {
  return (
    <View style={styles.hero}>
      <Image
        style={styles.heroImage}
        source={{ uri: 'https://placehold.co/500x400/6C63FF/FFFFFF?text=Meditate' }}
        resizeMode="cover"
      />
      <Text style={styles.heroTitle}>Find Your Calm, Every Day</Text>
      <Text style={styles.heroSubtitle}>
        MindfulMe helps you relax, focus and sleep better with guided
        meditations built for real life.
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.primaryButton,
          pressed && styles.primaryButtonPressed,
        ]}>
        <Text style={styles.primaryButtonText}>Get Started Free</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  heroImage: {
    width: '100%',
    height: 220,
    borderRadius: 24,
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2D2A4A',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 15,
    color: '#5C5A7A',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  primaryButtonPressed: {
    backgroundColor: '#564FCC',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Hero;
