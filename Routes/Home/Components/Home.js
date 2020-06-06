import React from "react";
import {View, StyleSheet, ActivityIndicator, Dimensions, Text} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import Constants from 'expo-constants';
import NewJobButton from './NewJobButton'
import MapContainer from './MapContainer'
import BottomTabContainer from '../../../Navigations/BottomTabContainer'

const {width, height} = Dimensions.get("window");
const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class Home extends React.Component{
	constructor(props){
		super(props);
		}

	componentDidMount(){
		if( Object.entries(this.props.userData) < 1 ){
			this.props.getUserData(this.props.idNumber)
		}
	}

	async componentWillReceiveProps(nextProps){
		var companyName = await (nextProps.userData).companyName
		if( (this.props.drivers).length < 1 ){
			this.props.getDrivers(companyName)
		}
		//console.log((nextProps.userData).companyName)
	}

render(){
		return(
			<Container>
				<View style={{flex:1}}>
					<MapContainer />
					<NewJobButton />
				</View>
				<BottomTabContainer />
			</Container>
		);

	}
}

export default Home;

const styles = StyleSheet.create({
	activityIndicator:{
		marginTop: (40/100)*(height),
	}
})