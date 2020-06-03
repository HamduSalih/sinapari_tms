import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container } from 'native-base'
import ScrollContainer from './ScrollContainer'

export default class AddDriver extends Component{
    render(){
        return(
            <View>
                <ScrollContainer 
                    userData={this.props.userData}
                />
            </View>
        )
    }
}