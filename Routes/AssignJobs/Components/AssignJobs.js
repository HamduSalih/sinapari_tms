import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container } from 'native-base'
import RenderJobs from './RenderJobs'

export default class AssignJobs extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#eef0ef'}}>
                <Text>Hello World</Text>
            </View>
        )
    }
}