import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder = '',
  keyboardType = 'default',
  multiline = false,
}) => {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, multiline && styles.multiline]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9A97B5"
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5C5A7A',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#2D2A4A',
    borderWidth: 1,
    borderColor: '#E5E1FF',
  },
  multiline: {
    height: 90,
    textAlignVertical: 'top',
  },
});

export default Input;
