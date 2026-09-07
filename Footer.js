import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2026 MindfulMe. All rights reserved.</Text>
      <View style={styles.footerLinksRow}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Terms</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingTop: 40,
  },
  footerText: {
    fontSize: 12,
    color: '#9A97B5',
    marginBottom: 10,
  },
  footerLinksRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLink: {
    fontSize: 12,
    color: '#6C63FF',
    marginHorizontal: 10,
    fontWeight: '600',
  },
});

export default Footer;
