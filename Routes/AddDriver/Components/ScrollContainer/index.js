import React from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Picker } from 'react-native'
import { Container } from 'native-base'
import styles from './ScrollStyles'

export default class ScrollContainer extends React.Component{
    constructor(props){
        super(props);
    }    

    state={
        affiliate: 'under_partner',
        rating: 0,
        company: this.props.userData.companyName
    }

    render(){
        return(
            <ScrollView contentContainerStyle>
                <View style={styles.formContainer}>
                    <Text style={styles.labels}>Fullname</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Driver's fullname"
                        onChangeText={(fullname)=> this.setState({fullname})}
                        value={this.state.fullname}
                    />

                    <Text style={styles.labels}>Driver's Licence</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Driver Licence'
                        onChangeText={(driverLicense)=> this.setState({driverLicense})}
                        value={this.state.driverLicense}
                    />
                    <Text style={styles.labels}>Vehicle Type</Text>
                    
                    <View style={styles.pickerInput}>
                        <Picker
                            selectedValue={this.state.trailer_type}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({trailer_type: itemValue})
                            }>
                            <Picker.Item label="Trailer Type" value="" />
                            <Picker.Item label="Flatbed" value="flatbed" />
                            <Picker.Item label="Transit" value="transit" />
                            <Picker.Item label="Box-cargo" value="box-cargo" />
                            <Picker.Item label="Oil-tanker" value="oil-tanker" />
                        </Picker>
                    </View>

                    <Text style={styles.labels}>Truck Model</Text>
                    
                    <TextInput
                        style={styles.textInput}
                        placeholder='Truck name/model'
                        onChangeText={(truck_model)=> this.setState({truck_model})}
                        value={this.state.truck_model}
                    />     

                    <Text style={styles.labels}>Vehicle Number</Text>
                    
                    <TextInput
                        style={styles.textInput}
                        placeholder='Vehicle number'
                        onChangeText={(truck_number)=> this.setState({truck_number})}
                        value={this.state.truck_number}
                    />  

                    <Text style={styles.labels}>Trailer Length</Text>
                    
                    <View style={styles.pickerInput}>
                        <Picker
                            selectedValue={this.state.trailer_length}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({trailer_length: itemValue})
                            }>
                            <Picker.Item label="Trailer Length" value="" />
                            <Picker.Item label="20ft" value="20ft" />
                            <Picker.Item label="40ft" value="40ft" />
                        </Picker>
                    </View>               
                </View>

                <View style={styles.formContainer2}>
                    <Text style={styles.labels}>Username</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Input driver username'
                        onChangeText={(username)=> this.setState({username})}
                        value={this.state.username}
                    />

                    <Text style={styles.labels}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Input driver password'
                        onChangeText={(password)=> this.setState({password})}
                        value={this.state.password}
                    />

                    <Text style={styles.labels}>Identification Number</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder='Any Id Number(Voter"s etc...)'
                        onChangeText={(id_number)=> this.setState({id_number})}
                        value={this.state.id_number}
                    />
                    <Text style={styles.labels}>Phone Number</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder='Input driver phone number'
                        onChangeText={(phone_number)=> this.setState({phone_number})}
                        value={this.state.phone_number}
                    />
                </View>
                <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.userButton}
                            onPress={()=>console.log(this.state)}
                        >
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView> 
        )
    }
}