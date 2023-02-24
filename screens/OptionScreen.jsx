import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {Pressable, Text, StyleSheet, ImageBackground } from 'react-native'

const localImg = require("../assets/SpaceWallaper.jpg")

const OptionScreen = ({ setOption, setWentWrong }) => {
  const navigation = useNavigation()
  return (
    <ImageBackground source={localImg} resizeMode="cover" style={styles.image}>
      <Pressable onPress={() => { navigation.navigate('Login'); setOption(false); setWentWrong(false) }} style={styles.login}><Text style={{ fontSize: 30, color: "white" }}>Login</Text></Pressable>
      <Pressable onPress={() => { navigation.navigate('Register'); setOption(false); setWentWrong(false) }} style={styles.register}><Text style={{ fontSize: 30, color: "white" }}>Register</Text></Pressable>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  login: {
    paddingVertical: 20,
    paddingHorizontal: "10%",
    borderRadius: 5,
    backgroundColor: "black",
  },
  register: {
    paddingVertical: 20,
    paddingHorizontal: "10%",
    borderRadius: 5,
    backgroundColor: "black"
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingBottom: "30%"
  },
})

export default OptionScreen