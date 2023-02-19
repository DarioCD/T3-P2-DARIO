import {useEffect} from 'react'


const LogoutScreen = ({onLogout}) => {
    useEffect(() => {
        onLogout("")
    }, [])
}

export default LogoutScreen