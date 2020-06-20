import React, {Component} from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Container } from 'native-base'
import * as firebase from 'firebase';
import '@firebase/firestore';
import MapContainer from './MapContainer'
import ScrollContainer from './ScrollContainer';

const database = firebase.firestore();


export default class SelectedJobDetails extends Component{
    state={
        driverLocations: [],
        bidDetails: []
    }

    componentDidMount(){
        var locationsCollection = database.collection('locations')
        locationsCollection
			.where('name', '==', (this.props.driverInfo).fullname)
			.onSnapshot((querySnapshot)=>{
				var locations = []
				querySnapshot.forEach((doc)=>{
					locations.push({
						name: doc.data().name,
						latitude: doc.data().lat,
                        longitude: doc.data().long,
                        latitudeDelta: 0.05,
			            longitudeDelta: 0.05
					})
					
				})
				this.setState({driverLocations: locations})
            })
        
        var bidsCollection = database.collection('bids')
        bidsCollection.where('companyName', '==', (this.props.driverInfo).company)
        .where('driverName', '==', (this.props.driverInfo).fullname)
        .get()
        .then((querySnapshot)=>{
            var bidDetail = []
            querySnapshot.forEach((doc)=>{
                bidDetail.push(doc.data())
            })
            this.setState({bidDetails: bidDetail})
            //console.log(this.state.bidDetails)
            //console.log(this.state.driverLocations)
        })
    }

    render(){
        return(
            <Container>
                <View style={{flex:1}}>
                    {
                        (this.state.driverLocations).length < 1 && (this.state.bidDetails).length < 1 &&
                        <View style={{
                            flex:1, justifyContent:'center', alignItems:'center'
                        }}>
                            <ActivityIndicator
							size="large" 
							color='#141d48'/>
                            <Text style={{
                                width:'100%',
                                textAlign:'center',
                                fontSize:14,
                                lineHeight: 16
                            }}>Getting driver trip data...</Text>
                        </View>
                    }
                    {
                        (this.state.driverLocations).length > 0 && (this.state.bidDetails).length > 0 &&
                        <View style={{flex:1}}>
                            <MapContainer 
                                bidDetails={this.state.bidDetails}
                                driverLocations={this.state.driverLocations}
                            />
                            <ScrollContainer 
                                bidDetails={this.state.bidDetails}
                            />
                        </View>
                    }
                </View>
            </Container>
        )
    }
}