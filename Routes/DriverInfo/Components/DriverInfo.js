import React from "react";
import {View, Text, Linking} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import MapContainer from './MapContainer'
import ScrollContainer from './ScrollContainer'


const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class DriverInfo extends React.Component{
	constructor(props){
		super(props);		
	}

	componentDidMount(){
		var driverInfo = this.props.driverInfo
		console.log(driverInfo)
		this.props.getDriverLocation(driverInfo.driver_license)
	}

render(){
		return(
			<Container>
				<View style={{flex:1}}>
					{
						this.props.region &&
						<MapContainer 
							region={this.props.region} />
					}
					<ScrollContainer 
						driverInfo={this.props.driverInfo}
						currentJob={this.props.currentJob}/>
				</View>
			</Container>
		);

	}
}

export default DriverInfo;