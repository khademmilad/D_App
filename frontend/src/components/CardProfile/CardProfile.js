import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const CardProfile = ({ user, images, onBackPress }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <FlatList
          horizontal
          data={images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.userImage} resizeMode="cover" />
          )}
        />
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.age}>{user.age} years old</Text>
      {/* <View style={styles.hashtags}>
        {user.hashtags.map((tag, index) => (
          <Text key={index} style={styles.hashtagText}>
            #{tag}
          </Text>
        ))}
      </View> */}
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
  imageContainer: {
    height: 200,
    marginBottom: 20,
  },
  userImage: {
    width: 150,
    height: '100%',
    marginRight: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 18,
    marginBottom: 10,
  },
  hashtags: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  hashtagText: {
    marginRight: 5,
    fontSize: 14,
    color: 'blue',
  },
  backButton: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
  },
});

export default CardProfile;
