import React from "react";
import {View, Text, Linking} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';


const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class DriverInfo extends React.Component{
	constructor(props){
		super(props);		
	}

	componentDidMount(){
		var driverInfo = this.props.driverInfo
		console.log(driverInfo)
	}

render(){
		return(
			<Container>
				<View style={{flex:1}}>
					<Text>Hello World</Text>
				</View>
			</Container>
		);

	}
}

export default DriverInfo;