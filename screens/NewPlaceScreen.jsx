import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import LocationPicker from "../components/LocationPicker";
import MapView, { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";

import { getBirdsToPopulateMap } from "../apiRequest/apiRequests";

const NewPlaceScreen = () => {
	const [databaseLocations, setDatabaseLocation] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getBirds = () => {
		getBirdsToPopulateMap().then((response) => {
			setDatabaseLocation(response);
			// setIsLoading(false);
		});
	};

	useEffect(() => {
		getBirds();
	}, []);

	const [selectedLocation, setSelectedLocation] = useState();
	const mapRegion = {
		latitude: 51.3805849,
		longitude: -0.1479596,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};

	const selectLocationHandler = (event) => {
		setSelectedLocation({
			lat: event.nativeEvent.coordinate.latitude,
			lng: event.nativeEvent.coordinate.longitude,
		});
	};

	let markerCoordinates;

	if (selectedLocation) {
		markerCoordinates = {
			latitude: selectedLocation.lat,
			longitude: selectedLocation.lng,
		};
	}

	return (
		<MapView
			style={styles.map}
			region={mapRegion}
			// onPress={selectLocationHandler}>
			// {markerCoordinates && (
			// 	<Marker title='Picked Location' coordinate={markerCoordinates}></Marker>
			// )}
		>
			{databaseLocations.map((location, index) => {
				const locationSpec = {
					latitude: location.lat,
					longitude: location.lng,
				};
				return (
					<Marker
						key={index}
						title={location.comName}
						coordinate={locationSpec}></Marker>
				);
			})}
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});

export default NewPlaceScreen;
