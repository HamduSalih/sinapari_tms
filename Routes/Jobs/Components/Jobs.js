import React from 'react'
import { View, Text } from 'react-native'
import { Container } from 'native-base'
import RenderJobs from './RenderJobs'

export default class Jobs extends React.Component{
    componentDidMount(){
        console.log(this.props.jobs)
    }

    render(){
        return(
            <Container>
                <View style={{
                    flex:1
                }}>
                    <RenderJobs 
                        jobs={this.props.jobs} />
                </View>
            </Container>
        )
    }
}