import React from "react";
import { StyleSheet } from 'react-native';
import { Actions, Scene, ActionConst } from "react-native-router-flux";
import LoginContainer from './Login/Containers/LoginContainer'
import RegisterContainer from './Register/Containers/RegisterContainer'
import RegProcessContainer from './RegProcess/Containers/RegProcessContainer'
import HomeContainer from './Home/Containers/HomeContainer'
import AddDriverContainer from './AddDriver/Containers/AddDriverContainer'
import DriversContainer from './Drivers/Containers/DriversContainer'
import DriverInfoContainer from './DriverInfo/Containers/DriverInfoContainer'

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="login" hideNavBar component={LoginContainer} title="Login"  initial/>
		<Scene key="register" type={ActionConst.RESET} hideNavBar component={RegisterContainer} title="Register"  />
		<Scene key="regprocess" hideNavBar component={RegProcessContainer} title="Registeration Process"  />
		<Scene key="home" type={ActionConst.RESET} hideNavBar component={HomeContainer} title="Home" />
		<Scene key="addDriver" component={AddDriverContainer} title="Add Driver"/>
		<Scene key="drivers" component={DriversContainer} title="My Drivers"/>
		<Scene key="driverInfo" hideNavBar component={DriverInfoContainer} title="Current Driver"/>
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