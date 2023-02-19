import React, { useEffect, useState } from 'react'
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native'


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
        <ScrollView>
            <View style={styles.container}>
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
                                <Image style={{ width: 100, height: 100 }}
                                    source={imgName} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text>Type : {ship.type}</Text>
                                <Text>Speed : {ship.speed}</Text>
                                <Text>Weapons : {ship.weapons}</Text>
                                <Text>Cargo : {ship.maxCargo}</Text>
                            </View>
                        </View>
                    )
                }) : <></>}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    containerShips: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        padding: 20,
        width: "80%",
        backgroundColor: '#d9f0a3',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1
    },
})

export default ShipsScreen