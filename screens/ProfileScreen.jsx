import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { getBirdsByUserId } from "../apiRequest/apiRequests";
import ImagePicker from "../components/ImagePicker";
import { LocationContext } from "../components/LocationContext";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import NavBar from "../components/NavBar";
import MapPreview from "../components/MapPreview";
import NewPlaceScreen from "./NewPlaceScreen";

const ProfileScreen = ({ navigation }) => {
  const [context, setContext] = useContext(LocationContext);
  const [birdList, updateBirdList] = useState([]);
  const { user_id } = context;
  const [trigger, toggleTrigger] = useState(true);

  useEffect(() => {
    getBirdsByUserId(user_id).then(response => {
      updateBirdList(response);
    });
  }, [trigger]);

  const handlePress = () => {
    navigation.navigate("ProfileAddBird", { birdList, updateBirdList });
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableWithoutFeedback
          onPress={handlePress}
          style={styles.addSightingButton}
        >
          <Text>Add Sighting!</Text>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView style={styles.addSighting}>
        <View style={styles.profileGallery}>
          {birdList.map((bird, i) => {
            return (
              <TouchableWithoutFeedback
                style={styles.birds}
                onPress={() => {
                  navigation.navigate("ProfileModal", {
                    ...bird,
                    screen: "ProfileScreen",
                    toggleTrigger,
                    trigger
                  });
                }}
                key={i}
              >
                <Image style={styles.birds} source={{ uri: bird.img_url }} />
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.mapContainer}>
        <NewPlaceScreen />
      </View>
      <View style={styles.iconContainer}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#2D9676",
    justifyContent: "space-around",
    borderWidth: 2
  },
  birds: {
    height: 100,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 100,
    borderWidth: 1,
    // borderColor: "black",
    marginBottom: 40,
    borderRadius: 20
  },
  mapContainer: {
    width: "100%",
    height: 200,
    borderWidth: 1
  },
  addSighting: {
    width: "100%",
    borderWidth: 1
  },
  addSightingButton: {
    width: "100%",
    height: 50,
    textAlign: "center",
    justifyContent: "center"
  },
  profileGallery: {
    // flex: 1,
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  iconContainer: {
    backgroundColor: "#2D9676",
    borderTopColor: "black",
    borderTopWidth: 4,
    height: 60,
    justifyContent: "space-around",
    width: "100%"
  }
});

export default ProfileScreen;
