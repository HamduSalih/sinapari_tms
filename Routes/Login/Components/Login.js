import React, { Component } from 'react'
import { View, AsyncStorage, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Dimensions, Image } from 'react-native'
import { Button } from 'native-base'
import { Actions } from 'react-native-router-flux'
import * as firebase from 'firebase';
import '@firebase/firestore';

const {width, height} = Dimensions.get('window')

const database = firebase.firestore();

const logo = require('../../../assets/img/sinalogo.jpg')

export default class Login extends Component{

    state = {
        affiliate: 'partner',
        rating: 0
    }

    _navigate = () => {
        var version = "1.0.0"
            var versionControl = database.collection('versionControl').doc('versionControl')
            versionControl
            .get()
            .then((doc)=>{
                if((doc.data()).version == version){
                    let params = this.state
                    Actions.register({userInfo: params})
                }else{
                    if(alert('Please close app and update to the latest version')){

                    }
                }
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    _login = async(idNumber) => {
            var version = "1.0.0"
            var versionControl = database.collection('versionControl').doc('versionControl')
            versionControl
            .get()
            .then((doc)=>{
                if((doc.data()).version == version){
                    var tmsCollection = database.collection('tms_users')

                    tmsCollection.where('username', '==', this.state.username)
                    .where('password', '==', this.state.password)
                    .get()
                    .then(async(querySnapshot)=>{
                     querySnapshot.forEach(async(doc)=>{
                            idNumber = doc.data().id_number;
                        })
                    })
                 .then(async()=>{
                        Actions.home({idNumber: idNumber});
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                }else{
                    if(alert('Please close app and update to the latest version')){

                    }
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        var tmsCollection = database.collection('tms_users')

        tmsCollection.where('username', '==', this.state.username)
        .where('password', '==', this.state.password)
        .get()
        .then(async(querySnapshot)=>{
            querySnapshot.forEach(async(doc)=>{
                idNumber = doc.data().id_number;
            })
        })
        .then(async()=>{
            Actions.home({idNumber: idNumber});
        })
        .catch((error)=>{
            console.log(error)
        })

        /**if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            //alert('Logged In');
            await AsyncStorage.setItem('isLoggedIn', '1');
            this.props.navigation.navigate('Root');
        }else{
            alert('User info not corrected')
        } */
    }

    render(){
        return(
            <KeyboardAvoidingView 
                    style={styles.container}>
                <View style={styles.formContainer}>
                    <Image 
                        source={logo}
                        style={{
                            width: width * 0.3,
                            height: height * 0.3,
                            resizeMode: 'contain',
                            marginBottom: -(height * 0.05)
                        }}
                    />
                    <Text style={{
                        fontSize: 12,
                        marginBottom: 10
                    }}>Note: Fill this page also to register</Text>
                    <Text style={styles.labels}>Username</Text>
                    <TextInput
                        placeholder='Input your username'
                        style={styles.textInput}
                        onChangeText={(username)=> this.setState({username})}
                        value={this.state.username}
                        autoCapitalize='none'
                    />
                    <Text style={styles.labels}>Password</Text>
                    <TextInput
                        placeholder='Password'
                        style={styles.textInput}
                        onChangeText={(password)=> this.setState({password})}
                        value={this.state.password}
                        autoCapitalize='none'
                        secureTextEntry
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.userButton}
                            onPress={this._login}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userButton}
                            onPress={this._navigate.bind(this, 'register')}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    labels:{
        fontSize: 25,
        marginBottom: 10
    },
    formContainer:{
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput:{
        borderColor: '#141d48',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        width: '100%'
    },
    userButton: {
        backgroundColor: '#141d48',
        padding: 15,
        borderRadius: 5,
        width: '45%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    }
})