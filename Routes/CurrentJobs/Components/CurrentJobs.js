import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container } from 'native-base'
import RenderJobs from './RenderJobs'

export default class CurrentJobs extends Component{

    componentDidMount(){
        if((this.props.activeDrivers).length < 1){
            this.props.getActiveDrivers()
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.activeDrivers)
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'#eef0ef'}}>
                <Text>Hello World</Text>
            </View>
        )
    }
}