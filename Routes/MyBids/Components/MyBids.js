import React from "react";
import {View, Text, YellowBox} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import Constants from 'expo-constants';
import BottomTab from '../../../Navigations/BottomTabContainer';
import RenderBids from './RenderBids'
const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class MyBids extends React.Component{
	constructor(props){
		super(props);
	}

	state = {
	}

	componentDidMount(){
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
					{
						(this.props.acceptedBids).length < 1 &&
						<View style={{
							flex:1, justifyContent:'center', alignItems:'center'
						}}>
							<Text style={{
								width:'100%',
								textAlign:'center',
								fontSize:14,
								lineHeight: 16
							}}>You don't have any accepted bid. Keep trying and ALL THE BEST Partner</Text>
						</View>
					}
					{
						(this.props.acceptedBids).length > 0 &&
						<RenderBids 
							allBids={this.props.acceptedBids}
						/>
					}
				</View>
				<BottomTab />
			</Container>
		);
	}
}

export default MyBids;