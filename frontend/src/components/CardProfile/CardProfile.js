import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CardProfile = ({ user, onBackPress }) => {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.name}>{user.name}</Text>
      {/* Display other profile information */}
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
  },
});

export default CardProfile;
