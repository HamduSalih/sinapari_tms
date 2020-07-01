import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions, AsyncStorage } from "react-native"
import * as firebase from 'firebase';
import '@firebase/firestore';

const database = firebase.firestore();

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED 
//IN actionConstants.js
const { 
	GET_USER_DATA,
	GET_DRIVERS,
	GET_JOBS,
	ACCEPTED_BIDS,
	GET_INACTIVE_DRIVERS,
	DRIVERS_LOCATION
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function getUserData(idNumber){
	var tmsCollection = database.collection('tms_users')
	
	return(dispatch)=>{
		tmsCollection.where('id_number', '==', idNumber)
		.onSnapshot((querySnapshot)=>{
			var userData
			querySnapshot.forEach((doc)=>{
				userData = doc.data()
			})
			dispatch({
				type: GET_USER_DATA,
				payload: userData
			})
		})
	}
}

export function getDrivers(companyName){
	var tmsDrivers = database.collection('tms_drivers')
	
	return(dispatch)=>{
		tmsDrivers.where('company', '==', companyName)
		.onSnapshot((querySnapshot)=>{
			var drivers = []
			querySnapshot.forEach((doc)=>{
				drivers.push(doc.data())
			})
			dispatch({
				type:GET_DRIVERS,
				payload: drivers
			})
		})
	}
}

export function getInactiveDrivers(companyName){
	var tmsDrivers = database.collection('tms_drivers')
	
	return(dispatch)=>{
		tmsDrivers.where('company', '==', companyName)
		.where('status', '==', 'inactive')
		.onSnapshot((querySnapshot)=>{
			querySnapshot.forEach((doc)=>{
				var inactiveDrivers = []
				inactiveDrivers.push(doc.data())
			})
			dispatch({
				type:GET_INACTIVE_DRIVERS,
				payload: inactiveDrivers
			})
		})
	}
}

export function getJobs(){
	var jobsCollection = database.collection('jobs')
	
	return(dispatch)=>{
		jobsCollection.where('status', '==', 'not live')
		.onSnapshot((querySnapshot)=>{
			var jobs = []
			querySnapshot.forEach((doc)=>{
				jobs.push(doc.data())
			})
			dispatch({
				type:GET_JOBS,
				payload: jobs
			})
		})
	}
}

export function getDriverBids(companyName){
	var bidsCollection = database.collection('bids');
	
	return (dispatch) => {
		bidsCollection.where('driverName', '==', companyName)
		.where('status', '==', 'accepted')
		.onSnapshot((querySnapshot)=>{
			var allBids = [];
			querySnapshot.forEach((doc)=>{
				allBids.push(doc.data());
			})
			dispatch({
				type: ACCEPTED_BIDS,
				payload: allBids
			})
		})
	}
}

export function driversLocations(companyName){
	var locationsCollection = database.collection('locations')
	var docIds = []
	return (dispatch)=>{
		locationsCollection.where('company', '==', companyName)
		.get()
		.then((querySnapshot)=>{
			querySnapshot.forEach((doc)=>{
				docIds.push(doc.id)
			})
		})
		.then(()=>{
			dispatch({
				type: DRIVERS_LOCATION,
				payload: docIds
			})
		})
	}
}

//--------------------
//Action Handlers
//--------------------
function handleGetUserData(state, action){
	return update(state, {
		userData:{
			$set: action.payload
		}
	})
}

function handleGetDrivers( state, action ){
	return update( state, {
		drivers:{
			$set: action.payload
		}
	})
}

function handleGetInactiveDrivers( state, action ){
	return update( state, {
		inactiveDrivers:{
			$set: action.payload
		}
	})
}

function handleGetJobs( state, action ){
	return update( state, {
		jobs:{
			$set: action.payload
		}
	})
}

function handleGetDriverBids(state, action){
	return update(state, {
		acceptedBids:{
			$set: action.payload
		}
	})
}

function handleGetAllDriverLocation(state, action){
	return update(state, {
		docIds:{
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	GET_USER_DATA:handleGetUserData,
	GET_DRIVERS:handleGetDrivers,
	GET_JOBS:handleGetJobs,
	ACCEPTED_BIDS:handleGetDriverBids,
	GET_INACTIVE_DRIVERS:handleGetInactiveDrivers,
	DRIVERS_LOCATION:handleGetAllDriverLocation
}
const initialState = {
  region:{},
};

export function HomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}