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
import JobsContainer from './Jobs/Containers/JobsContainer'
import JobDetailsContainer from './JobDetails/Containers/JobDetailsContainer'
import BidProcessContainer from './bidProcess/Containers/BidProcessContainer'
import MyBidsContainer from './MyBids/Containers/MyBidContainer'
import AssignJobsContainer from './AssignJobs/Containers/AssignJobsContainer'

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="login" hideNavBar component={LoginContainer} title="Login"  initial/>
		<Scene key="register" type={ActionConst.RESET} hideNavBar component={RegisterContainer} title="Register"  />
		<Scene key="regprocess" hideNavBar component={RegProcessContainer} title="Registeration Process"  />
		<Scene key="home" type={ActionConst.RESET} hideNavBar component={HomeContainer} title="Home" />
		<Scene key="addDriver" component={AddDriverContainer} title="Add Driver"/>
		<Scene key="drivers" component={DriversContainer} title="My Drivers"/>
		<Scene key="driverInfo" hideNavBar component={DriverInfoContainer} title="Current Driver"/>
		<Scene key="jobs" component={JobsContainer} title="Open Jobs"/>
		<Scene key="jobDetails" hideNavBar component={JobDetailsContainer} title="Job Details"/>
		<Scene key="bidProcess" hideNavBar component={BidProcessContainer} title="Processing Bid"/>
		<Scene key="myBids" component={MyBidsContainer} title="Accepted Bids"/>
		<Scene key="assignJobs" component={AssignJobsContainer} title="Select Drivers"/>
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