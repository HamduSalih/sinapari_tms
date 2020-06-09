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
	GET_JOBS
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
	var userData
	return(dispatch)=>{
		tmsCollection.where('id_number', '==', idNumber)
		.get()
		.then((querySnapshot)=>{
			querySnapshot.forEach((doc)=>{
				userData = doc.data()
			})
		})
		.then(()=>{
			dispatch({
				type: GET_USER_DATA,
				payload: userData
			})
		})
	}
}

export function getDrivers(companyName){
	var tmsDrivers = database.collection('tms_drivers')
	var drivers = []
	return(dispatch)=>{
		tmsDrivers.where('company', '==', companyName)
		.get()
		.then((querySnapshot)=>{
			querySnapshot.forEach((doc)=>{
				drivers.push(doc.data())
			})
		})
		.then(()=>{
			dispatch({
				type:GET_DRIVERS,
				payload: drivers
			})
		})
	}
}

export function getJobs(){
	var jobsCollection = database.collection('jobs')
	var jobs = []
	return(dispatch)=>{
		jobsCollection.where('status', '==', 'not live')
		.get()
		.then((querySnapshot)=>{
			querySnapshot.forEach((doc)=>{
				jobs.push(doc.data())
			})
		})
		.then(()=>{
			dispatch({
				type:GET_JOBS,
				payload: jobs
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

function handleGetJobs( state, action ){
	return update( state, {
		jobs:{
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	GET_USER_DATA:handleGetUserData,
	GET_DRIVERS:handleGetDrivers,
	GET_JOBS:handleGetJobs
}
const initialState = {
  region:{},
};

export function HomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}