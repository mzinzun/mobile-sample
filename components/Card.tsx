import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Card = () => {
  return (
    <View style={styles.cardContainer}>



    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderRadius: 15,
    overflow: 'hidden',
    margin: 10,
  },
  link: {
    //
    width: '100%',
    height: 200,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Card;
