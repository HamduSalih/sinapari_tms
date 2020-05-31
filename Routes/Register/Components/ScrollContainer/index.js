import React, { Component } from 'react'
import { View, ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'
import { Actions } from 'react-native-router-flux'
import styles from './ScrollContainerStyles'
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';

export default class ScrollContainer extends Component{
    constructor(props){
        super(props);
        this.state = this.props.userInfo
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ picture: result.uri });
        }
      };


      _upload = async(img_src) => {
           const response = await fetch(img_src);
            const blob = await response.blob();
            var ref = firebase.storage().ref().child(this.state.id_number.toString() + '.jpg');
            var params = this.state
            //ref.getMetadata().then(function(metadata){
            //   console.log(metadata);
            //});
            //ref.getDownloadURL().then(function(url){
            //  console.log(url);
            //})
            /**
             * 
            ref.put(blob)
            .then(()=>{
                Actions.regprocess({userData:param});
            })
            .catch((err)=>{
                console.log(err)
            })*/ 
            if(ref.put(blob)){
                console.log(params);
                Actions.regprocess({userInfo: params});
            };
            //console.log(this.state);
        }

    render(){   
        let { picture } = this.state;
        return(
            <ScrollView contentContainerStyle>
                <View style={styles.formContainer}>
                    <TouchableOpacity
                        style={{backgroundColor: '#141d48',
                        padding: 15,
                        width: '100%',
                        borderRadius: 5,
                        flexDirection:'row',
                        alignSelf: 'flex-start',
                        marginBottom: 20}
                    }
                        onPress={this._pickImage}
                    >
                        <Text style={{color: '#fff'}}>Pick an Image(User Image)</Text>
                    </TouchableOpacity>

                    {
                        picture && 
                        <Image source={{uri: picture}} style={{width: 200, height:200, padding:10}}/>
                    }
                    <Text style={styles.labels}>Fullname</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Your fullname'
                        onChangeText={(fullname)=> this.setState({fullname})}
                        value={this.state.fullname}
                    />

                    <Text style={styles.labels}>Company Name</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Name of Company'
                        onChangeText={(companyName)=> this.setState({companyName})}
                        value={this.state.companyName}
                    />

                    <Text style={styles.labels}>Residential Address</Text>
                    <TextInput
                        style={styles.textInput}
                        multiline
                        placeholder='Residential address'
                        onChangeText={(resAddress)=> this.setState({resAddress})}
                        value={this.state.resAddress}
                    />

                    <Text style={styles.labels}>House Number</Text>
                    <TextInput
                        style={styles.textInput}
                        multiline
                        placeholder='House Number'
                        onChangeText={(houseNumber)=> this.setState({houseNumber})}
                        value={this.state.houseNumber}
                    />
                </View>

                <View style={styles.formContainer2}>
                    <Text style={styles.labels}>Identification Number</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Input your id number'
                        onChangeText={(id_number)=> this.setState({id_number})}
                        value={this.state.id_number}
                    />
                    <Text style={styles.labels}>Phone Number</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder='Input your phone number'
                        onChangeText={(phone_number)=> this.setState({phone_number})}
                        value={this.state.phone_number}
                    />
                </View>
                <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.userButton}
                            onPress={this._upload.bind(this, this.state.picture)}
                        >
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        )
    }
}