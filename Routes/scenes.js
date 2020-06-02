import React from "react";
import { StyleSheet } from 'react-native';
import { Actions, Scene, ActionConst } from "react-native-router-flux";
import LoginContainer from './Login/Containers/LoginContainer'
import RegisterContainer from './Register/Containers/RegisterContainer'
import RegProcessContainer from './RegProcess/Containers/RegProcessContainer'
import HomeContainer from './Home/Containers/HomeContainer'

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="login" hideNavBar component={LoginContainer} title="Login"  />
		<Scene key="register" hideNavBar component={RegisterContainer} title="Register"  />
		<Scene key="regprocess" hideNavBar component={RegProcessContainer} title="Registeration Process"  />
		<Scene key="home" hideNavBar component={HomeContainer} title="Home"  initial/>
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