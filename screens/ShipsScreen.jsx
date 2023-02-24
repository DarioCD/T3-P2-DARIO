import React, { useEffect, useState } from 'react'
import { Image, View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'

const localImg = require("../assets/SpaceWallaper.jpg")


const ShipsScreen = ({ userToken }) => {
    const [ships, setShips] = useState([])
    let imgName;

    useEffect(() => {
        const retriveShips = async () => {
            const data = await fetch(`https://api.spacetraders.io/systems/OE/ship-listings?token=${userToken}`)
            data.json().then((data) => setShips(data.shipListings))
        };
        retriveShips()
    }, [userToken])

    return (
        <ImageBackground source={localImg} resizeMode="cover" style={styles.image}>
            <ScrollView>
                {ships.length != 0 ? ships.map((ship, index) => {
                    if (ship.type === "JW-MK-I") {
                        imgName = require(`../assets/nave1.png`)
                    } else if (ship.type === "JW-MK-II") {
                        imgName = require(`../assets/nave2.png`)
                    } else if (ship.type === "GR-MK-I") {
                        imgName = require(`../assets/nave3.png`)
                    } else if (ship.type === "ZA-MK-II") {
                        imgName = require(`../assets/nave4.png`)
                    } else if (ship.type === "ZA-MK-III") {
                        imgName = require(`../assets/nave5.png`)
                    } else if (ship.type === "EM-MK-I") {
                        imgName = require(`../assets/nave6.png`)
                    } else if (ship.type === "HM-MK-I") {
                        imgName = require(`../assets/nave7.png`)
                    } else if (ship.type === "GR-MK-II") {
                        imgName = require(`../assets/nave8.png`)
                    } else if (ship.type === "GR-MK-III") {
                        imgName = require(`../assets/nave9.png`)
                    } else if (ship.type === "HM-MK-III") {
                        imgName = require(`../assets/nave10.png`)
                    } else if (ship.type === "TD-MK-I") {
                        imgName = require(`../assets/nave11.png`)
                    } else {
                        imgName = require(`../assets/nave12.png`)
                    }
                    return (
                        <View key={index} style={styles.containerShips}>
                            <View>
                                <Image style={styles.imgContainer}
                                    source={imgName} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.text}>Type : {ship.type}</Text>
                                <Text style={styles.text}>Speed : {ship.speed}</Text>
                                <Text style={styles.text}>Weapons : {ship.weapons}</Text>
                                <Text style={styles.text}>Cargo : {ship.maxCargo}</Text>
                            </View>
                        </View>
                    )
                }) : <></>}
            </ScrollView>
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
    containerShips: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        padding: 20,
        backgroundColor: 'black',
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1
    },
    imgContainer: {
        display: "flex",
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    text: {
        color: "white",
        fontSize: 20
    }
})

export default ShipsScreen