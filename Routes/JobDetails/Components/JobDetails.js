import React from "react";
import {View, Text, YellowBox} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import MapContainer from './MapContainer'
import ScrollContainer from './ScrollContainer'

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class JobDetails extends React.Component{
	
	componentDidMount(){
		console.log(this.props.jobDetails);
  	}

  componentDidUpdate(prevProps, prevState){
	/**if(this.props.booking.status === 'confirmed'){
		Actions.trackDriver({type:'reset'});
	} */
  } 

render(){
		return(
			<Container>
				<View style={{flex:1}}>
					<MapContainer 
						jobDetails={this.props.jobDetails}/>
					<ScrollContainer 
						jobDetails={this.props.jobDetails}
						userData={this.props.userData} />					
				</View>
			</Container>
		);

	}
}

export default JobDetails;