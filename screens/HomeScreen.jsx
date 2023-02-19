import { useEffect, useState } from 'react'
import { Image, View, Text, StyleSheet, Button } from 'react-native'

const HomeScreen = ({ userToken, userData, setUserData }) => {
    useEffect(() => {
        const retriveUserData = async () => {
            const data = await fetch(`https://api.spacetraders.io/my/account?token=${userToken}`)
            data.json().then((data) => setUserData(data.user))
        };
        retriveUserData()
    }, [userToken])

    return (
        <View style={styles.container}>
            <Text style={styles.userName}>
                <Image style={{ width: 50, height: 50 }}
                    source={require("../assets/myAvatar.png")} />
                {userData.username}
            </Text>
            <Text style={styles.moneyContainer}>
                {userData.credits} Crd
            </Text>
            <View style={styles.shipStructureContainer}>
                <Text style={styles.itemsContainer}>
                    <Image style={{ width: 35, height: 35 }}
                        source={require("../assets/SpaceShip.png")} />
                    {userData.shipCount}
                </Text>
                <Text style={styles.itemsContainer}>
                    <Image style={{ width: 35, height: 35 }}
                        source={require("../assets/structure.png")} />
                        {userData.structureCount}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: "100%",
    },
    userName: {
        padding: 20,
        fontSize: 40,
    },
    moneyContainer: {
        display: 'flex',
        textAlign: 'center',
        padding: 30,
        width: "80%",
        backgroundColor: '#d9f0a3',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20,
    },
    shipStructureContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        padding: 20,
        width: "80%",
        backgroundColor: '#d9f0a3',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1
    },
    itemsContainer: {
        fontSize: 20,
        paddingBottom: 15
    }
})

export default HomeScreen