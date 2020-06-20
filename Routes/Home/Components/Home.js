import React from "react";
import {View, StyleSheet, ActivityIndicator, Dimensions, Text} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import Constants from 'expo-constants';
import NewJobButton from './NewJobButton'
import MapContainer from './MapContainer'
import BottomTabContainer from '../../../Navigations/BottomTabContainer'
import * as firebase from 'firebase';
import '@firebase/firestore';

const database = firebase.firestore();

const {width, height} = Dimensions.get("window");
const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class Home extends React.Component{
	constructor(props){
		super(props);
		}

		state = {
			driverLocations: []
		}


	componentDidMount(){
		if( Object.entries(this.props.userData) < 1 ){
			this.props.getUserData(this.props.idNumber)
		}

		if( (this.props.jobs).length < 1 ){
			this.props.getJobs()
		}		
		//console.log(this.props.idNumber)
	}

	async componentWillReceiveProps(nextProps){
		var companyName = await (nextProps.userData).companyName
		if( (this.props.drivers).length < 1 ){
			this.props.getDrivers(companyName)
			this.props.getInactiveDrivers(companyName)
			this.props.driversLocations(companyName)
			this.props.getDriverBids(companyName)
		}
		
		if((nextProps.docIds).length > 0){
			var locationsCollection = database.collection('locations')
			var docId
			
			var lenghty = (nextProps.docIds).length
			docIds = (nextProps.docIds)
			docId = (nextProps.docIds)[0]

			locationsCollection
			.where('company', '==', companyName)
			.onSnapshot((querySnapshot)=>{
				var locations = []
				querySnapshot.forEach((doc)=>{
					locations.push({
						name: doc.data().name,
						latitude: doc.data().lat,
						longitude: doc.data().long
					})
					
				})
				this.setState({driverLocations: locations})
				console.log(this.state)

			})
		}
	}

render(){
		return(
			<Container>
				{
					(this.state.driverLocations.length) < 1 &&
					<Container>
						<View style={{flex:1, justifyContent:'center'}}>
						<ActivityIndicator
							size="large" 
							color='#141d48'/>
						
							<Text style={{textAlign:'center'}}>
								Loading map and driver locations...
							</Text>
						</View>
						<BottomTabContainer />
					</Container>
					||
					<Container>
						<View style={{flex:1}}>
							<MapContainer 
							driverLocations={this.state.driverLocations}
							/>
							<NewJobButton />
						</View>
						<BottomTabContainer />
					</Container>
				}
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