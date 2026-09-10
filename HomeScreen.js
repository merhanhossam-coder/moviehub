import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Button from '../components/common/Button';
import { useAppTheme } from '../context/ThemeContext';

const HomeScreen = () => {
  const { colors, isDark, toggleTheme } = useAppTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.themeRow}>
          <Button onPress={toggleTheme} variant="outline">
            <Text style={styles.themeButtonText}>
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Text>
          </Button>
        </View>
        <Header />
        <Hero />
        <Features />
        <Testimonial />
        <CTASection />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  themeRow: {
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  themeButtonText: {
    color: '#6C63FF',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default HomeScreen;
