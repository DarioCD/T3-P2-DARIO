import React, { useState, useEffect } from 'react'
import {Text, StyleSheet, TextInput, Pressable, ImageBackground } from 'react-native'

import Toast from 'react-native-root-toast'

const localImg = require("../assets/SpaceWallaper.jpg")


const RegisterScreen = ({ onRegister, wentWrong, setOption }) => {
    const [userName, setUserName] = useState('');
    useEffect(() => {
        setOption(false)
    })

    const nameHandler = () => {
        if (userName !== '') {
            onRegister(userName)
        } else {
            Toast.show('Please introduzca un nombre para continuar', {
                duration: Toast.durations.LONG
            })
        }
    }
    return (
        <ImageBackground source={localImg} resizeMode="cover" style={styles.image}>
            <TextInput onChangeText={setUserName} value={userName} placeholder={"Introduce el nombre"} style={styles.inputStyle}></TextInput>
            {wentWrong && window.alert("Select another name please")}
            <Pressable onPress={nameHandler} style={styles.register}><Text style={{ fontSize: 30, color: "white" }}>Register</Text></Pressable>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: "center",
    },
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
    register: {
        paddingVertical: 20,
        paddingHorizontal: "10%",
        borderRadius: 5,
        backgroundColor: "black"
    },
})

export default RegisterScreen