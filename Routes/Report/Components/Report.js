import React, { Component } from 'react';
import { StyleSheet, 
        KeyboardAvoidingView, 
        View, } from 'react-native';
import Constants from 'expo-constants';
import FormComponents from './FormComponents'
import BottomTab from '../../../Navigations/BottomTabContainer';


export default class Report extends Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
    }

    _navigate = () => {

    }

    render(){
        return(
            <KeyboardAvoidingView
                style={styles.container}>
                <FormComponents 
                    userData={this.props.userData}
                    sendReport={this.props.sendReport}
                />
                <BottomTab />
            </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})