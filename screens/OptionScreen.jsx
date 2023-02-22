import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, View } from 'react-native'

const OptionScreen = ({setOption}) => {
  const navigation = useNavigation()
  return (
    <View>
        <Button title='Login'onPress={() => {navigation.navigate('Login'); setOption(false)}} >
        </Button>
        <Button title='Register' onPress={() => {navigation.navigate('Register'); setOption(false)}}>
        </Button>
    </View>
  )
}

export default OptionScreen