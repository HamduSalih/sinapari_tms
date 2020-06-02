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
		
		const testCoords = [
			{
				latitude: 8.1378253,
            	longitude: -0.8189397
			},
			{
				latitude: 9.3911457,
            	longitude: -2.7061143
			},
			{
				latitude: 5.8861923,
            	longitude: -0.6566057
			}
		]

		return(
			<MapView
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={region}
                showsTraffic={true}
                showsMyLocationButton={true}
                showsUserLocation={true}
			>
				{
					testCoords.map((obj, index)=>{
						return(
							<MapView.Marker 
								key={index}
								coordinate={{latitude:obj.latitude, longitude:obj.longitude}}
								pinColor='#141d48'
							/>
						)
					})
				}
			</MapView>
	)
}

export default MapContainer;