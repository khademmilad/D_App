import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import SwipeImage from '../../../assets/images/swipe.jpg'


const CardProfile = ({ user, images, onBackPress }) => {
  return (
    <View style={styles.profileContainer}>

      {/* Images */}
      <View style={styles.userImageContainer}>
        <Image source={SwipeImage} style={styles.userImage} />
      </View>
      
      {/* Profile Information */}
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>Elon Musk's biography goes here...</Text>
        <Text>Location: Berlin</Text>
        <Text>Work: Fachinformatiker</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: "column",
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
    // borderRadius: 10,
  },
  userInfo: {
    alignItems: 'left',
    backgroundColor: 'gray',
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
    marginHorizontal: 20,
  },
  buttonsContainer: {
    flex: 3,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: 100,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
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
    color: 'black',
    fontSize: 16,
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