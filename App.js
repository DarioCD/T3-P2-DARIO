import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";

import HomeScreen from "./screens/HomeScreen";
import ShipsScreen from "./screens/ShipsScreen";
import LogoutScreen from "./screens/LogoutScreen";
import LoginScreen from "./screens/LoginScreen";
import { useEffect, useState } from "react";

import * as SecureStorege from "expo-secure-store";
import OptionScreen from "./screens/OptionScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoanScreen from "./screens/LoanScreen";

const STORAGE_TOKEN_KEY = "mytoken";

const Drawer = createDrawerNavigator();

const save = async (key, value) => {
  await SecureStorege.setItemAsync(key, value);
};

const getValueFor = async (key) => {
  let result = await SecureStorege.getItemAsync(key);
  if (result !== null) {
    alert("Tu valor es: " + result);
    return result;
  } else {
    alert("No existe esa key");
    return "";
  }
};

export default function App() {
  const [userToken, setUserToken] = useState("");
  const [wentWrong, setWentWrong] = useState(false);
  const [userData, setUserData] = useState({});
  const [option, setOption] = useState(true)

  useEffect(() => {
    const retriveStorageToken = async () => {
      const storageToken = await getValueFor(STORAGE_TOKEN_KEY);
      setUserToken(storageToken);
    };
    retriveStorageToken();
  }, []);

  const storageToken = (newToken) => {
    const getUserProfileInfo = async () => {
      try {
        const response = await fetch(
          `https://api.spacetraders.io/my/account?token=${newToken}`
        );
        const data = await response.json();
        if (data.error) {
          save(STORAGE_TOKEN_KEY, "");
          setUserToken("");
          setWentWrong(true);
          setTimeout(() => {
            setWentWrong(false);
          }, 2000);
        } else {
          save(STORAGE_TOKEN_KEY, newToken);
          setUserToken(newToken);
        }
        return data;
      } catch (error) {
        console.error(error);
        return {};
      }
    };
    getUserProfileInfo();
  };

  const createToken = (userName) => {
    const createUser = async () => {
      try {
        const response = await fetch(
          `https://api.spacetraders.io/users/${userName}/claim`,
          {
            method: "POST",
          }
        );
        const data = await response.json();
        if (data.error) {
          setWentWrong(true);
          setTimeout(() => {
            setWentWrong(false);
          }, 2000);
        } else {
          save(STORAGE_TOKEN_KEY, data.token);
          setUserToken(data.token);
        }
      } catch (error) {
        console.error(error);
        return {};
      }
    };
    createUser();
  };
  
  const takeOutLoan = (token) => {
    const getLoan = async () => {
      try {
        const response = await fetch(
          `https://api.spacetraders.io/my/loans?token=${token}&type=STARTUP`,
          {
            method: "POST",
          }
        );
        const data = await response.json();
        if (data.error) {
          setWentWrong(true);
          setTimeout(() => {
            setWentWrong(false);
          }, 2000);
        }else{
          userData.credits += data.credits;
          setUserData(userData)
        }
        return data;
      } catch (error) {
        console.error(error);
        return {};
      }
    };
    getLoan();
  };

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" style={styles.container}>
          {userToken === "" ? (
            <>
            {option && <Drawer.Screen name="Options">{() => (
              <OptionScreen setOption={setOption} setWentWrong={setWentWrong}></OptionScreen>
            )}</Drawer.Screen>}
              <Drawer.Screen name="Login">
                {() => (
                  <LoginScreen
                    onLogin={storageToken}
                    wentWrong={wentWrong}
                    setOption={setOption}
                  ></LoginScreen>
                )}
              </Drawer.Screen>
              <Drawer.Screen name="Register">
                {() => (
                  <RegisterScreen
                    onRegister={createToken}
                    wentWrong={wentWrong}
                    setOption={setOption}
                  ></RegisterScreen>
                )}
              </Drawer.Screen>
            </>
          ) : (
            <>
              <Drawer.Screen name="Home">
                {() => (
                  <HomeScreen
                    userToken={userToken}
                    userData={userData}
                    setUserData={setUserData}
                  ></HomeScreen>
                )}
              </Drawer.Screen>
              <Drawer.Screen name="Loans">
                {() => (
                  <LoanScreen
                    userToken={userToken}
                    takeOutLoan={takeOutLoan}
                    wentWrong={wentWrong}
                    userData={userData}
                    setUserData={setUserData}
                  ></LoanScreen>
                )}
              </Drawer.Screen>
              <Drawer.Screen name="Ships">
                {() => <ShipsScreen userToken={userToken}></ShipsScreen>}
              </Drawer.Screen>
              <Drawer.Screen name="Logout">
                {() => <LogoutScreen onLogout={storageToken} setWentWrong={setWentWrong} setOption={setOption}></LogoutScreen>}
              </Drawer.Screen>
            </>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
