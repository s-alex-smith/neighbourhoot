import React from "react";
import { View, ScrollView } from "react-native";
import LocationPicker from "../components/LocationPicker";

const MapScreen = () => {
  return (
    <ScrollView>
      <View>
        <LocationPicker />
      </View>
    </ScrollView>
  );
};

export default MapScreen;
