import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container } from 'native-base'
import RenderJobs from './RenderJobs'
import BottomTab from '../../../Navigations/BottomTabContainer'

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
            <Container>
                <View style={{
                    flex:1,
                    backgroundColor: '#eef0ef'
                }}>
                    {
					(this.props.activeDrivers).length < 1 &&
					<View style={{
						flex:1, justifyContent:'center', alignItems:'center'
					}}>
						<Text style={{
							width:'100%',
							textAlign:'center',
							fontSize:14,
							lineHeight: 16
						}}>You don't have any active drivers. Bid for  jobs!!!</Text>
    					</View>
    				}
                    {
					    (this.props.activeDrivers).length > 0 &&
					    <RenderJobs 
						    drivers={this.props.activeDrivers}
					    />
				    }
                </View>
                <BottomTab />
            </Container>
        )
    }
}