import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions, AsyncStorage } from "react-native"
import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBICeaakAkGPlVOVjObj7BDaoZvmgibDA8",
    authDomain: "sinapari-6dbbd.firebaseapp.com",
    databaseURL: "https://sinapari-6dbbd.firebaseio.com",
    projectId: "sinapari-6dbbd",
    storageBucket: "sinapari-6dbbd.appspot.com",
    messagingSenderId: "501482455468",
    appId: "1:501482455468:web:4a21086028e2e8237fba09",
    measurementId: "G-Y9TJXZG88L"
  };
//firebase.analytics();

const database = firebase.firestore();

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED 
//IN actionConstants.js
const {
  DRIVER_LOCATION
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function getDriverLocation(driverId){
  //we will get location of driver from locations collections
	//using driver id from the biddetails

	var locationCollection = database.collection('locations').doc(driverId)
	var region 
	return(dispatch)=>{
		 locationCollection
		 .onSnapshot((doc)=>{
			dispatch({
				type:DRIVER_LOCATION,
				payload: {
					latitude: (doc.data()).lat,
					longitude: (doc.data()).long,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA
				}
			})
		 })
	 }
}


//--------------------
//Action Handlers
//--------------------
function handleGetDriverLocation(state, action){
  return update(state, {
    region:{
      $set: action.payload
    }
  })
}


const ACTION_HANDLERS = {
	DRIVER_LOCATION:handleGetDriverLocation
}

const initialState = {
  
};

export function DriverInfoReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}