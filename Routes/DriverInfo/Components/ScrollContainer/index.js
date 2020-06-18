import React, { Component } from 'react';
import { AsyncStorage, Text, ScrollView, 
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView,
        Platform} from 'react-native';
import { View } from 'native-base';
import styles from './scrollContainerStyles'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Card } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

class ScrollContainer extends Component{
    state={
        buttonText: 'Start Job'
    };

    componentDidMount(){
        
    }

    componentWillReceiveProps(nextProps){
       
    }

    onPressEvent = () => {
        
    }

    componentDidUpdate(){
        //console.log(this.state);
    }

    _navigate = () => {
        
    }

    render(){
        return(
            <View
              style={styles.container}>
                <ScrollView contentContainerStyle={[styles.scrollStyle], {backgroundColor:'#eef0ef',
                    justifyContent:'center',
                    height: '100%'}}>
                    <Card>
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between'
                        }}>
                            <View>
                                <Text>{this.props.driverInfo.fullname}</Text>
                            </View>
                            <View>
                                <Text>{this.props.driverInfo.driver_license}</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between'
                        }}>
                            <View style={{
                                width:'30%'
                            }}>
                                <Text>{this.props.driverInfo.truck_model}</Text>
                            </View>
                            <View style={{
                                width:'30%'
                            }}>
                                <Text>{this.props.driverInfo.trailer_type}</Text>
                            </View>
                            <View style={{
                                width:'30%'
                            }}>
                                <Text style={{width:'100%', textAlign:'right'}}>{this.props.driverInfo.trailer_length}</Text>
                            </View>
                        </View>

                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            marginTop:15
                        }}>
                            <View style={{
                            }}>
                                <Text>Vehicle Number: {this.props.driverInfo.truck_number}</Text>
                            </View>
                            <View style={{
                            }}>
                                <Text>Currently {this.props.driverInfo.status}</Text>
                            </View>
                        </View>
                    </Card>

                    <Card style={{
                            flex:1,
                            justifyContent:'center'
                        }}>
                        <View>
                            {
                                !this.props.currentJob&&
                                <Text style={{width:'100%', textAlign:'center'}}>Job Details will be loaded here if active</Text>
                            }
                        </View>
                    </Card>
                </ScrollView>
                <View style={{
                    borderColor: 'grey',
                    borderTopWidth: 1,
                    padding: 10,
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}>
                    <TouchableOpacity style={{
                        width: '90%',
                        backgroundColor: '#141d48',
                        borderRadius: 50
                    }}
                    >
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            padding: 7,
                            fontSize: 17
                        }}>Dismiss Driver</Text>
                    </TouchableOpacity>
                </View>                 
            </View>
        )
    }
}
export default ScrollContainer;