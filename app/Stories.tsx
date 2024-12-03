import { View, Text, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import StoryComponent from '../components/StoryComponent'

const Stories = () => {
  const storyList = [
    {
      id: 1,
      name: 'Molly Kelly',
      image: 'img9.jpeg',
      story: 'Welcome to the very start of your React Native journey! If you\'re looking for environment setup instructions, they\'ve moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more! Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background. Welcome to the very start of your React Native journey! If you\'re looking for environment setup instructions, they\'ve moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more! Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background.',
    },
    {
      id: 2,
      name: 'John Doe',
      image: 'img9.jpeg',
      story: 'Welcome to the very start of your React Native journey! If you\'re looking for environment setup instructions, they\'ve moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more! Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background.',
    },
    {
      id: 3,
      name: 'Jane Doe',
      image: 'img9.jpeg',
      story: 'Welcome to the very start of your React Native journey! If you\'re looking for environment setup instructions, they\'ve moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more! Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background.',
    }
    ]
  return (
    <View style={styles.container}>
      {/* use FlatList to render storyList */}
      <FlatList
        data={storyList}
        renderItem={({ item }) => <StoryComponent name={item.name} story={item.story} image={item.image} />}
        keyExtractor={(item) => item.id.toString()}
      />

      </View>

)}

export default Stories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    borderWidth: 5,
    borderColor: 'blue',
    borderStyle: 'solid',

  },
  storyContainer: {

    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'purple',
    borderStyle: 'solid',

  },
  storyText: {
    borderWidth: 2,
    borderColor: 'green',
    borderStyle: 'solid',
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
    fontSize: 24,
    padding: 20,
  },
  storyImage: {
    flex: 1,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid',
    borderRadius: 15,
    overflow: 'hidden',

  },
})
