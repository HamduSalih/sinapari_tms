import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import { Actions } from 'react-native-router-flux'

export default class SideMenu extends React.Component{
    _navigate = async (scenceLoc) => {
        Actions[scenceLoc].call();
    }

    render(){
        const tabs = [{
            title:'Profile',
            subTitle:'',
            icon:'home',
            sceneKey: 'clientProfile'
        }
    ]
        return(
            <View style={styles.container}>
                <View style={styles.statusBarView}></View>
               <Text style={{fontSize:40, borderBottomColor: '#141d48', borderBottomWidth: 1}}>Menu</Text>
               {
                    tabs.map((obj, index)=>{
                        return(
                            <TouchableOpacity key={index} 
                                onPress={ ()=> Actions[obj.sceneKey].call() } 
                            >
                                <Text style={{fontSize:20, paddingVertical: 15, borderBottomColor: '#141d48', borderBottomWidth: 1}}>{obj.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        backgroundColor: '#eef0ef'
    },
    statusBarView: {
        height: Constants.statusBarHeight
    }
});