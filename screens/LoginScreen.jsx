import React, { useState, useEffect } from 'react'
import { Image, View, Text, StyleSheet, TextInput, Button, Pressable, ImageBackground } from 'react-native'

import Toast from 'react-native-root-toast'

const localImg = require("../assets/SpaceWallaper.jpg")


const LoginScreen = ({ onLogin, wentWrong, setOption }) => {
    const [userToken, setUserToken] = useState('');
    useEffect(() => {
        setOption(false)
    })

    const tokenHandler = () => {
        if (userToken !== '') {
            onLogin(userToken)
        } else {
            Toast.show('Please introduzca un token para continuar', {
                duration: Toast.durations.LONG
            })
        }
    }
    return (
        <ImageBackground source={localImg} resizeMode="cover" style={styles.image}>
            <TextInput onChangeText={setUserToken} value={userToken} placeholder={"Introduce the token"} style={styles.inputStyle}></TextInput>
            {wentWrong && window.alert("Inválid token")}
            <Pressable onPress={tokenHandler } style={styles.login}><Text style={{ fontSize: 30, color: "white" }}>Login</Text></Pressable>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        width: "80%",
        height: 30,
        borderColor: 'black',
        textAlign: "center",
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        backgroundColor: "white",
    },
    image: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: "center",
    },
    login: {
        paddingVertical: 20,
        paddingHorizontal: "10%",
        borderRadius: 5,
        backgroundColor: "black",
    },
})

export default LoginScreen