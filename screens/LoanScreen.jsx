import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

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
        <View style={styles.container}>
            {loan.length != 0 ?
                <View style={styles.containerLoan}>
                    <Text>{loan[0].amount} Crd</Text>
                    <Text>Rate: {loan[0].rate} %</Text>
                    <Text>Term: {loan[0].termInDays} days</Text>
                    <Text>Type: {loan[0].type}</Text>
                    <Text style={{ marginBottom: 10 }}>hola</Text>
                    <Button title='Take out' style={styles.btnTakeOut} onPress={() => { takeOutLoan(userToken); setTimeout(() => { navigation.navigate("Home") }, 2000); }}></Button>
                    {wentWrong && <Text style={{ marginTop: 10 }}>Only one loan allowed at a time</Text>}
                </View> : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    containerLoan: {
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
    btnTakeOut: {

    }
})
export default LoanScreen