import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import * as Random from 'expo-random';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base'
import { useCardAnimation } from 'react-navigation-stack';
import * as firebase from 'firebase';
import '@firebase/firestore';

const database = firebase.firestore();

const RenderJobs = ({drivers, jobDetails, userData, assignedDriverBid}) => {
  

  var DATA = drivers //pass allJobs array to data variable 
  //to be used to render all jobs with cards
  
  var jobDetails = jobDetails
  var iteration = parseInt(jobDetails.number_of_trucks)
  var iterationRef = 0

  function removeCompanyBid(jobDetails){
    collections = database.collection('bids')
    collections.where('driverName', '==', jobDetails.companyName)
				.where('jobId', '==', jobDetails.jobId)
				.get()
				.then((querySnapshot)=>{
					querySnapshot.forEach((doc)=>{
						collections.doc(doc.id).delete()
					})
				})
  }
  
  async function _assignJob(param){
    iterationRef = iterationRef + 1
    const randomBytes = await Random.getRandomBytesAsync(9);
        var i = 0;
        var bidId = '';
        while(i < randomBytes.length){
            bidId = bidId + randomBytes[i];
            i = i + 1;
        }
    var driverJobDetails = {
      bidId: bidId,
      amount: jobDetails.amount,
      jobId: jobDetails.jobId,
      driverId: param.driver_license,
      driverName: param.fullname,
      truck_number: param.truck_number,
      rating: 'N/A',
      phone_number: param.phone_number,
      companyName: userData.companyName,
      client_number: jobDetails.client_number,
      paid: false,
      status: 'accepted',
      goodsDescription: jobDetails.goodsDescription,
      pickUpAddress: {
          address: jobDetails.pickUpAddress.address,
          lat: jobDetails.pickUpAddress.lat,
          long: jobDetails.pickUpAddress.long,
          time: jobDetails.pickUpAddress.time
      },
      dropOffAddress: {
          address: jobDetails.dropOffAddress.address,
          lat: jobDetails.dropOffAddress.lat,
          long: jobDetails.dropOffAddress.long,
          time: jobDetails.dropOffAddress.time
      },
      client: jobDetails.client,
      tripStatus: null,
      ownerStatus: null
  }
    if(iterationRef <= iteration){
      assignedDriverBid(driverJobDetails)
      if(iterationRef == iteration){
        removeCompanyBid(driverJobDetails)
      }
    }else{
      alert('Number of Trucks reached')
    }
    //Actions.currentJob({bidDetails: jobBids});
  }

  function Item({ title }) {

    return (
      <Card style={{flex:1}}>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          width: '100%'
        }}>
          <View style={{
            width:'65%'
          }}>
            <Text>{title.fullname}</Text>
            <Text>{title.truck_model} | {title.trailer_type} | {title.truck_number}</Text>
          </View>

          <View style={{
            width:'35%'
          }}>
            <Button style={{
                backgroundColor:'#141d48'
              }}
              onPress={()=>_assignJob(title)}
            >
              <Text style={{textAlign:'center', width:'100%', color:'white'}}>Assign</Text>
            </Button>
          </View>
        </View>  
      </Card>
    );
  }

  
    return(
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={DATA}
          renderItem={({item})=>
            <Item title={item}/>
          }
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText:{
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    borderColor: 'grey',
    width: '50%'
  },
  itemView:{
    paddingVertical: 10
  },
  itemText:{
    fontSize: 15
  }
});

export default RenderJobs;