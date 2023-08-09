import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import ImageSwipe from '../../../assets/images/swipe.jpg';



const SwipeCard = ({ name, bio, imageSource, showYesText, showNoText }) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={imageSource} style={styles.image} resizeMode="cover">
        <View style={styles.cartInner}>
          <View style={styles.textContainer}>
            {showYesText && <Text style={[styles.yesText, styles.text]}>Yes</Text>}
            {showNoText && <Text style={[styles.noText, styles.text]}>No</Text>}
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

SwipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired, // Assuming you're passing the image source as a require()
};

const styles = StyleSheet.create({ 
  card: {
    width: '80%', // Adjust the width as needed
    height: '80%', // Adjust the height as needed
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
    backgroundColor: 'red'
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
