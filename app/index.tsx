import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const index = () => {
  const [fontsLoaded] = useFonts({
    'Aileron-Black': require('../assets/fonts/Aileron-Black.otf'),
    'Aileron-HeavyItalic': require('../assets/fonts/Aileron-HeavyItalic.otf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

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
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.container} source={require('../assets/images/img1.jpeg')} >
      <Text style={styles.titleText}>Welcome To The Last Mile</Text>

      <View style={[styles.cardContainer, isLandscape ? styles.landscape : styles.portrait]}>

        <View style={styles.card}>
          <ImageBackground source={require('../assets/images/img8.jpeg')} style={styles.cardImage}>
            <Link href='/About' style={styles.cardText} ><Text style={{ margin: 10, }}>Learn About The Last Mile</Text></Link>
          </ImageBackground>
        </View>
        <View style={styles.card}>
          <ImageBackground source={require('../assets/images/img7.jpeg')} style={styles.cardImage}>
            <Link href='/Stories' style={styles.cardText} ><Text style={{ margin: 10, }}>Success Stories</Text></Link>
          </ImageBackground>
        </View>
        <View style={styles.card}>
          <ImageBackground source={require('../assets/images/img5.jpeg')} style={styles.cardImage}>
            <Link href='/Faq' style={styles.cardText} ><Text style={{ margin: 10, }}>FAQ</Text></Link>
          </ImageBackground>
        </View>
      </View>

      <Link href='/Apply' style={styles.applyText} ><Text>Apply</Text></Link>


    </ImageBackground>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
  },
  cardContainer: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    // overflow: 'hidden',
    display: 'flex',
    // alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  landscape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '50%',
    paddingHorizontal: 40,
    paddingVertical: 20,
    gap: 20,
  },
  portrait: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    // alignContent: 'center',
    // alignItems: 'center',
    gap: 30,
    paddingHorizontal: 5,
  },
  card: {
    flex: 1,
    borderRadius: 15,
    // overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.5)',

  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cardImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderWidth: 2,
    // overflow: 'hidden',
    // borderRadius: 30,
    width: '100%',
  },
  cardText: {
    // height: '100%',
    width: '100%',
    color: 'goldenrod',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlignVertical: 'bottom'
  },
  titleText: {
    height: '20%',
    color: 'gold',
    fontSize: 48,
    fontFamily: 'Aileron-Black',
    textShadowColor: 'rgba(255, 255, 255, 0.75)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 5, // Shadow blur radius
    textAlignVertical: 'center',
  },
  applyText: {
    height: '10%',
    color: 'red',
    backgroundColor: 'rgba(255, 215, 0,.5)',
    fontSize: 30,
    paddingHorizontal: 50,
    fontFamily: 'Aileron-Black',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 5, // Shadow blur radius
    borderColor: 'red',
    borderStyle: 'solid',
    textAlignVertical: 'center',
    borderWidth: 2,
    borderRadius: 15,
  }
})
