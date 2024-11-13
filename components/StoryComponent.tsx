import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const StoryComponent = ({ name, story, image }: { name: string; story: string; image: string }) => {
  const [fontsLoaded] = useFonts({
    'Aileron-Black': require('../assets/fonts/Aileron-Black.otf'),
    'Aileron-HeavyItalic': require('../assets/fonts/Aileron-HeavyItalic.otf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.storyContainer}>
        <Text style={styles.storyText}>{story}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/img9.jpeg')} />
        <Text style={styles.imageText}>{name}</Text>
      </View>


    </View>


  )
}

export default StoryComponent

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'purple',
    borderStyle: 'solid',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 20,
    width: '90%',
    marginHorizontal: 'auto',
    marginVertical: 10,
  },
  storyContainer: {
    flex: 2,
    fontSize: 24,
    padding: 20,
  },
  storyText: {
    fontSize: 20,
    padding: 20,
    fontFamily: 'SpaceMono-Regular',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // borderStyle: 'solid',
    overflow: 'hidden',

  },
  imageText: {
    fontSize: 28,
    fontFamily: 'Aileron-Black',
    color: 'gray',
  },
})
