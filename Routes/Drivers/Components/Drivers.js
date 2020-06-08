import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container } from 'native-base'
import RenderJobs from './RenderJobs'

export default class Drivers extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#eef0ef'}}>
                <RenderJobs 
                    drivers={this.props.drivers}
                />
            </View>
        )
    }
}