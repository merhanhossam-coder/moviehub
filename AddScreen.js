import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { useSessions } from '../context/SessionsContext';
import { useAppTheme } from '../context/ThemeContext';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import api from '../api/api';

const categories = ['Morning', 'Sleep', 'Focus', 'Anxiety'];

const AddScreen = () => {
  const { addSession } = useSessions();
  const { colors } = useAppTheme();
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [category, setCategory] = useState('Morning');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !duration.trim()) {
      Alert.alert('Missing Info', 'Please fill in the title and duration.');
      return;
    }
    setSubmitting(true);
    try {
      await api.post('/products/add', {
        title,
        description: notes,
        category,
      });
      addSession({ title, duration, notes, category });
      setTitle('');
      setDuration('');
      setNotes('');
      setCategory('Morning');
      Alert.alert('Session Added', `${title} has been added to your sessions.`);
    } catch (error) {
      Alert.alert('Error', 'Could not save the session. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.heading, { color: colors.text }]}>Add a New Session</Text>

        <Input
          label="Title"
          value={title}
          onChangeText={setTitle}
          placeholder="e.g. Evening Wind Down"
        />
        <Input
          label="Duration (minutes)"
          value={duration}
          onChangeText={setDuration}
          placeholder="e.g. 15"
          keyboardType="numeric"
        />
        <Input
          label="Notes"
          value={notes}
          onChangeText={setNotes}
          placeholder="Any details about this session"
          multiline
        />

        <Text style={[styles.label, { color: colors.subtext }]}>Category</Text>
        <View style={styles.categoryRow}>
          {categories.map(item => (
            <Button
              key={item}
              label={item}
              variant={category === item ? 'primary' : 'outline'}
              onPress={() => setCategory(item)}
              style={styles.categoryButton}
            />
          ))}
        </View>

        <Button
          label={submitting ? 'Saving...' : 'Submit'}
          onPress={handleSubmit}
          disabled={submitting}
          style={styles.submitButton}
        />
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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 60,
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 12,
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  categoryButton: {
    marginRight: 10,
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 24,
  },
});

export default AddScreen;
