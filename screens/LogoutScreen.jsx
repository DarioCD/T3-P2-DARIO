import { useEffect } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
const localImg = require("../assets/SpaceWallaper.jpg")


const LogoutScreen = ({ onLogout, setWentWrong, setOption }) => {
    useEffect(() => {
        setWentWrong(false)
        onLogout("")
        setOption(true)
    }, [])
    return (
        <ImageBackground source={localImg} resizeMode="cover" style={styles.image}></ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        height: "100%",
    }
})

export default LogoutScreen