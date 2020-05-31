import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";
import styles from "./MapStyles.js";
import MapViewDirections from 'react-native-maps-directions';

const markerImage = require('../../../../assets/img/marker.png')

export const MapContainer = ({
	})=>{
		
		const GOOGLE_MAPS_APIKEY = 'AIzaSyCspx_yMJwX4bTjLXTUHebo9TwYxTaLa6E';
        const region={
            latitude: 8.2790473,
            longitude: -1.1188077,
            latitudeDelta: 4,
            longitudeDelta: 4
        }

		return(
			<MapView
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={region}
                showsTraffic={true}
                showsMyLocationButton={true}
                showsUserLocation={true}
			>
			</MapView>
	)
}

export default MapContainer;