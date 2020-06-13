import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import * as Random from 'expo-random';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base'
import { useCardAnimation } from 'react-navigation-stack';

const RenderJobs = ({drivers, jobDetails, userData}) => {
  

  var DATA = drivers //pass allJobs array to data variable 
  //to be used to render all jobs with cards
  
  var jobDetails = jobDetails
  
  async function _assignJob(param){
    const randomBytes = await Random.getRandomBytesAsync(9);
        var i = 0;
        var bidId = '';
        while(i < randomBytes.length){
            bidId = bidId + randomBytes[i];
            i = i + 1;
        }
    var driverJobDetails = {
      bidId: bidId,
      amount: null,
      jobId: jobDetails.jobId,
      driverId: 'N/A',
      driverName: 'N/A',
      truck_number: 'N/A',
      rating: 'N/A',
      phone_number: 'N/A',
      companyName: userData.companyName,
      client_number: jobDetails.client_number,
      paid: false,
      status: 'pending',
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
      number_of_trucks: jobDetails.number_of_trucks,
      tripStatus: null,
      ownerStatus: null
  }
    console.log(driverJobDetails)
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