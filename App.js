import * as React from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MainScreen from "./screens/MainScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import BirdOverlay from "./components/BirdOverlay";
import NewPlaceScreen from "./screens/NewPlaceScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FilterOverlay from "./components/FilterOverlay";
import Header from "./components/Header";
import ProfileButton from "./components/ProfileButton";
import * as Location from "expo-location";
import {
  LocationContext,
  LocationProvider
} from "./components/LocationContext";
import ImagePicker from "./components/ImagePicker";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`
});

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const ProfileStack = createStackNavigator();
// const navigation = useNavigation();

const MainView = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="newMain" component={MainScreen} />
      <MainStack.Screen name="MyModal" component={BirdOverlay} />
      <MainStack.Screen name="FilterModal" component={FilterOverlay} />
      <MainStack.Screen name="MainAddBird" component={ImagePicker} />
    </MainStack.Navigator>
  );
};

const ProfileView = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="ProfileModal" component={BirdOverlay} />
      <ProfileStack.Screen name="ProfileAddBird" component={ImagePicker} />
    </ProfileStack.Navigator>
  );
};

export default function App() {
  return (
    <LocationProvider>
      <View style={styles.screen}>
        <NavigationContainer>
          <Header title="Birds" />
          <RootStack.Navigator>
            <RootStack.Screen
              name="Profile"
              component={ProfileView}
              options={{ title: "Profile" }}
            />
            <RootStack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home" }}
            />

            <RootStack.Screen
              name="Main"
              component={MainView}
              options={{
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate(ProfileScreen)}
                    title="Info"
                  />
                )
              }}
            />

            <RootStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Login" }}
            />

            <RootStack.Screen
              name="NewPlace"
              component={NewPlaceScreen}
              options={{ title: "New Place Screen" }}
            />

            <RootStack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ title: "Sign Up" }}
            />
            <RootStack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ title: "Welcome" }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </View>
    </LocationProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",

    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",

    marginBottom: 5
  }
});
