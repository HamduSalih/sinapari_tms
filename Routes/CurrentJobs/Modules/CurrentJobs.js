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
	GET_ACTIVE_DRIVERS
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function getActiveDrivers(){
    var tmsDriversCollection = database.collection('tms_drivers')
    return(dispatch, store)=>{
        tmsDriversCollection.where('status', '==', 'active')
        .where('company', '==', store().home.userData.companyName)
        .onSnapshot((querySnapshot)=>{
            var activeDrivers = []
            querySnapshot.forEach((doc)=>{
                activeDrivers.push(doc.data())
            })
            dispatch({
                type: GET_ACTIVE_DRIVERS,
                payload: activeDrivers
            })
        })
    }
}

//--------------------
//Action Handlers
//--------------------
function handleGetActiveDrivers(state, action){
    return update(state, {
        activeDrivers:{
            $set: action.payload
        }
    })
}

const ACTION_HANDLERS = {
    GET_ACTIVE_DRIVERS:handleGetActiveDrivers
}
const initialState = {
  region:{},
};

export function CurrentJobsReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}