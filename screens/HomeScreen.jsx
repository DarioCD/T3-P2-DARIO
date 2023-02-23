import { useEffect, useState } from 'react'
import { Image, View, Text, StyleSheet, Button, ImageBackground } from 'react-native'

const localImg = require("../assets/SpaceWallaper.jpg")

const HomeScreen = ({ userToken, userData, setUserData }) => {
    useEffect(() => {
        const retriveUserData = async () => {
            const data = await fetch(`https://api.spacetraders.io/my/account?token=${userToken}`)
            data.json().then((data) => setUserData(data.user))
        };
        retriveUserData()
    }, [userToken])

    return (
        <ImageBackground source={localImg} resizeMode="cover" style={styles.image}>
            <View style={styles.userName}>
                <Image style={styles.imgContainer}
                    source={require("../assets/myAvatar.png")} />
                <Text style={styles.textConatiner}>{userData.username}</Text>
            </View>
            <View style={styles.moneyContainer}>
                <Text style={styles.textConatiner}>{userData.credits} Credits</Text>
            </View>
            <View style={styles.shipStructureContainer}>
                <View style={styles.itemsContainer}>
                    <Image style={styles.imgContainer}
                        source={require("../assets/SpaceShip.png")} />
                    <Text style={styles.textConatiner}>{userData.shipCount} Ships</Text>
                </View>
            </View>
            <View style={styles.shipStructureContainer}>
                <View style={styles.itemsContainer}>
                    <Image style={styles.imgContainer}
                        source={require("../assets/Structure.png")} />
                    <Text style={styles.textConatiner}>{userData.structureCount} Structures</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        height: "100%",
    },
    userName: {
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: 'black',
        marginBottom: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    moneyContainer: {
        display: 'flex',
        textAlign: 'center',
        padding: 30,
        width: "80%",
        backgroundColor: 'black',
        color: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    shipStructureContainer: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 30,
        padding: 20,
        width: "80%",
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    itemsContainer: {
        fontSize: 20,
        paddingBottom: 15,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
    },
    textConatiner: {
        color: "white",
        textAlign: "center",
        fontSize: 30
    },
    imgContainer: {
        display: "flex",
        width: 70,
        height: 70,
        resizeMode: 'contain',
    }
})

export default HomeScreen