import React from "react";
import { StyleSheet } from 'react-native';
import { Actions, Scene, ActionConst } from "react-native-router-flux";
import LoginContainer from './Login/Containers/LoginContainer'

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="login" hideNavBar component={LoginContainer} title="Login"  initial/>
	</Scene>

);

const styles = StyleSheet.create({
	tabBar: {
	height: 50,
	borderTopColor: 'darkgrey',
	borderTopWidth: 1,
	opacity: 0.98,
	justifyContent:'space-between'
	}
	});

export default scenes;