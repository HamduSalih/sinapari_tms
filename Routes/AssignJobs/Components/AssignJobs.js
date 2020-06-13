import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container } from 'native-base'
import RenderJobs from './RenderJobs'

export default class AssignJobs extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#eef0ef'}}>
                {
                    (this.props.inactiveDrivers).length < 1 &&
                    (this.props.inactiveDrivers).length < parseInt((this.props.jobDetails).number_of_trucks) &&
                    <View style={{
                        flex:1, justifyContent:'center', alignItems:'center'
                    }}>
                        <Text style={{
                            width:'100%',
                            textAlign:'center',
                            fontSize:14,
                            lineHeight: 16
                        }}>All your drivers are on the road. Excellent Job</Text>
                    </View>
                    ||
                    <RenderJobs 
                        userData={this.props.userData}
                        drivers={this.props.inactiveDrivers}
                        jobDetails={this.props.jobDetails}/>
                }
            </View>
        )
    }
}