import React, { useState, useEffect } from 'react'
import { Image, View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native'

import Toast from 'react-native-root-toast'


const RegisterScreen = ({onRegister, wentWrong, setOption}) => {
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
    <View style={styles.container}>
            <TextInput onChangeText={setUserName} value={userName} placeholder={"Introduce el nombre"} style={wentWrong ? styles.inputStyleWrong : styles.inputStyle}></TextInput>
            {wentWrong && <Text style={{ marginBottom: 10 }}>Select another name please</Text>}
            <Button title='Register' onPress={nameHandler}></Button>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: "center",
        backgroundColor: "#deebf7"
    },
    btnContainer: {
        display: "flex",
        flexDirection: "row"
    },
    btnlogin: {
        borderRadius: 1,
        padding: 20,
        paddingHorizontal: 40,
        backgroundColor: "yellow"
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 1,
        padding: 5,
        marginBottom: 10
    },
    inputStyleWrong: {
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 1,
        padding: 5,
        marginBottom: 10
    },
})

export default RegisterScreen