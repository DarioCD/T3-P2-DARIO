import React, { useState } from 'react'
import { Image, View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native'

import Toast from 'react-native-root-toast'


const LoginScreen = ({ onLogin, wentWrong }) => {
    const [userToken, setUserToken] = useState('');

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
        <View style={styles.container}>
            <TextInput onChangeText={setUserToken} value={userToken} placeholder={"Introduce the token"} style={wentWrong ? styles.inputStyleWrong : styles.inputStyle}></TextInput>
            {wentWrong && <Text style={{ marginBottom: 10 }}>Invalid token hdp</Text>}
            <Button title='Login' onPress={tokenHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: "center"

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

export default LoginScreen