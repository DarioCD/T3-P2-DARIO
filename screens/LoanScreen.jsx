import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const localImg = require("../assets/SpaceWallaper.jpg")

const LoanScreen = ({ userToken, takeOutLoan, wentWrong}) => {
    const [loan, setLoan] = useState([])

    const navigation = useNavigation()
    useEffect(() => {
        const retriveLoan = async () => {
            const data = await fetch(`https://api.spacetraders.io/types/loans?token=${userToken}`)
            data.json().then((data) => setLoan(data.loans))
        };
        retriveLoan()
    }, [userToken])

    return (
        <ImageBackground source={localImg} resizeMode="cover" style={styles.image}>
            {loan.length != 0 ?
                <View style={styles.containerLoan}>
                    <Text style={styles.text}>{loan[0].amount} Credits</Text>
                    <Text style={styles.text}>Rate: {loan[0].rate} %</Text>
                    <Text style={styles.text}>Term: {loan[0].termInDays} days</Text>
                    <Text style={styles.text}>Type: {loan[0].type}</Text>
                    <Pressable style={styles.presabeTakeOut} onPress={() => { takeOutLoan(userToken); navigation.navigate("Home") }}>
                        <Text style={styles.btnTakeOut}>Take out</Text>
                    </Pressable>
                    {wentWrong && window.alert("Only one loan allowed at a time")}
                </View> : <></>}
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
    containerLoan: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
        width: "80%",
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    text: {
        color: "white",
        fontSize: 30
    },
    btnTakeOut: {
        fontSize: 30
    },
    presabeTakeOut: {
        marginTop: 20,
        padding: 20,
        borderRadius: 5,
        backgroundColor: "white",
    }
})
export default LoanScreen