

import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
// import { Link } from 'expo-router'



const About = () => {
  const [fontsLoaded] = useFonts({
    'Aileron-Black': require('../assets/fonts/Aileron-Black.otf'),
    'Aileron-Bold': require('../assets/fonts/Aileron-Bold.otf'),
    'Aileron-HeavyItalic': require('../assets/fonts/Aileron-HeavyItalic.otf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.titleText}>About The Last Mile</Text>
      <Text style={styles.bodyText}>We are a team of social innovators who are breaking the cycle of incarceration with technical education and training that champions students’ success after their release.</Text>

        <Text style={styles.bodyText}>The Last Mile technical education and training stops the cycle of incarceration. It also reduces recidivism, lowers the level of taxpayer money spent on incarceration, and produces exceptional employees.

          At the classroom level, our work involves using the most advanced online training and education techniques, professional instructors, and results-driven management to produce engineers, developers, and many other workforce-ready professionals. Our current curriculum includes 2 main areas of training: Web Development and Audio/Video Production.

          At the organizational level, our work involves partnerships with state government Corrections officials, corporations, funding sources, community groups, and public figures who have joined our cause.

          Together we have created an incarceration-to-work program that has become a model in 8 states..</Text>
      </ScrollView>
      {/* <Link href="/Index" >Home</Link> */}
    </SafeAreaView >
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Aileron-Black',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
  },
  bodyText: {
    fontFamily: 'Aileron-HeavyItalic',
    fontSize: 18,
    color: 'black',
    // textAlign: 'center',
    // margin: 20,
    padding: 20,
  }

})
