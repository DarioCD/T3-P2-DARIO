import React from 'react'
import { Button, View } from 'react-native'

const OptionScreen = ({navigation}) => {
  return (
    <View>
        <Button title='Login'onPress={() => navigation.navigate('Login')} >

        </Button>
        <Button title='Register' onPress={() => navigation.navigate('Register')}>

        </Button>
    </View>
  )
}

export default OptionScreen