import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { RNS3 } from "react-native-aws3";

const ImgPicker = props => {
  const [pickedImage, setPickedImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL,
      Permissions.LOCATION
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions.",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    console.log(image, "<<<<<<<");
    const file = {
      uri: image.uri,
      //name: image.uri,
      //need a name from somewhere
      type: image.type
    };

    const config = {
      keyPrefix: "s3/",
      bucket: "birdpicstorage",
      region: "eu-west-2",
      accessKey: "AKIAXBO2CA47ZPP2TJ4K",
      secretKey: "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",
      successActionStatus: 201
    };

    RNS3.put(file, config).then(response => {
      console.log(response.body.postResponse.location);
    });
    // setPickedImage(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom: 15
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ImgPicker;
