import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import SwipeImage from '../../../assets/images/swipe.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const CardProfile = ({ user, images, onBackPress }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.profileContainer}>

        {/* Images */}
        <View style={styles.userImageContainer}>
          <Image source={SwipeImage} style={styles.userImage} />
        </View>
        
        {/* Profile Information */}
        <View style={styles.userInfo}>

          <View style={styles.infoContainer}>
            <Text style={styles.name}>{user.name}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.bio}>Elon Musk's biography goes here...</Text>
          </View>

          <View style={styles.infoContainer}>
            <Ionicons name="location" size={20} style={styles.icon} />
            <Text style={styles.infoText}>Location: Berlin</Text>
          </View>
          
          <View style={styles.infoContainer}>
            <Icon name="home" size={20} color="gray" style={styles.icon} />
            <Text style={styles.infoText}>Work: Fachinformatiker</Text>
          </View>

        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.backButton]} onPress={onBackPress}>
            <Ionicons name="arrow-back" size={20} color="white" />
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.starButton]}>
            <Ionicons name="star" size={20} color="white" />
            <Text style={styles.buttonText}>Star</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.likeButton]}>
            <Ionicons name="heart" size={20} color="white" />
            <Text style={styles.buttonText}>Like</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    
  },
  profileContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: "column",
    borderColor: 'gray', // Add border color
    borderWidth: 1, // Add border width
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,  // For Android shadow
  },
  userImageContainer: {
    width: '100%',
    height: '50%',
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'darkorange',
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  userInfo: {
    alignItems: 'left',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    flex: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  icon: {
    marginRight: 8,
    color: 'black',
  },
  infoText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    width: 80,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  starButton: {
    backgroundColor: 'gold',
  },
  likeButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  backButton: {
    backgroundColor: 'gray',
  },
});

export default CardProfile;
