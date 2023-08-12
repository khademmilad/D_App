import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import CardProfile from '../CardProfile/CardProfile';


const SwipeCard = ({ user, showYesText, showNoText }) => {

  const [showProfile, setShowProfile] = useState(false);

  const handleCardPress = () => {
    setShowProfile(true);
  };
  const handleProfileBack = () => {
    setShowProfile(false);
  };

  if (showProfile) {
    return (
      <CardProfile user={user} onBackPress={handleProfileBack} />
    );
  }

  return (
    <TouchableOpacity style={styles.card} onPress={handleCardPress}>
      <View style={styles.card}>
        <ImageBackground source={{ uri: user.profile_image }} style={styles.image} resizeMode="cover">
          <View style={styles.cartInner}>
            <View style={styles.textContainer}>
              {showYesText && <Text style={[styles.yesText, styles.text]}>Yes</Text>}
              {showNoText && <Text style={[styles.noText, styles.text]}>No</Text>}
              <Text style={styles.name}>{user.username}</Text>
              <Text style={styles.bio}>{user.bio}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

SwipeCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
  }).isRequired,
  // ...other propTypes...
};

const styles = StyleSheet.create({ 
  card: {
    width: '100%', // Adjust the width as needed
    height: '100%', // Adjust the height as needed
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cartInner: {
    padding: 10,
    backgroundColor: 'gray'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  name: {
    fontSize: 18, // Adjust font size as needed
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16, // Adjust font size as needed
    color: 'white',
    lineHeight: 24,
  },
  yesText: {
    position: 'absolute',
    top: 16,
    left: 16,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 24,
    zIndex: 1, // Ensure it's above the card content
  },
  noText: {
    position: 'absolute',
    top: 16,
    right: 16,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24,
    zIndex: 1, // Ensure it's above the card content
  },
  
});

export default SwipeCard;
