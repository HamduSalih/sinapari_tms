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
	ASSIGNED_DRIVERS,
	GET_INACTIVE_DRIVERS
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function assignedDriverBid(driverJobDetails){
	var bidsCollection = database.collection('bids')
	var tmsDriversCollection = database.collection('tms_drivers')
	var assignedDrivers = []
	var inactiveDrivers = []
	var docId = ''
	return(dispatch, store)=>{
		bidsCollection.add(driverJobDetails)
		.then(()=>{
			bidsCollection.where('status', '==', 'accepted')
			.get()
			.then((querySnapshot)=>{
				querySnapshot.forEach((doc)=>{
					assignedDrivers.push(doc.data())
				})
			})
		})
		.then(()=>{
			bidsCollection.where('tripStatus', '==', 'live')
			.get()
			.then((querySnapshot, doc)=>{
					querySnapshot.forEach((doc)=>{
						assignedDrivers.push(doc.data())
					})
			})
		})
		.then(()=>{
			dispatch({
				type: ASSIGNED_DRIVERS,
				payload: assignedDrivers
			})
		})
		.then(()=>{
			tmsDriversCollection.where('driver_license', '==', driverJobDetails.driverId)
			.where('fullname', '==', driverJobDetails.driverName)
			.get()
			.then((querySnapshot,doc)=>{
					querySnapshot.forEach((doc)=>{
						docId = doc.id
					})
					if(docId !== ''){
						tmsDriversCollection.doc(docId)
						.update({
							status: 'active'
						})
					}
			})
			.then(()=>{
				tmsDriversCollection.where('company', '==', driverJobDetails.companyName)
				.where('status', '==', 'inactive')
				.get()
				.then((querySnapshot)=>{
					querySnapshot.forEach((doc)=>{
						inactiveDrivers.push(doc.data())
					})
				})
				.then(()=>{
					dispatch({
						type:GET_INACTIVE_DRIVERS,
						payload: inactiveDrivers
					})
				})
			}
			)
			.then(()=>{
				bidsCollection.where('driverId', '==', 'N/A')
				.where('driverName', '==', store().home.userData.companyName)
				.where('jobId', '==', driverJobDetails.jobId)
				.get()
				.then((querySnapshot)=>{
					querySnapshot.forEach((doc)=>{
						bidsCollection.doc(doc.id).delete()
					})
				})
			})
		})
	}
}

//--------------------
//Action Handlers
//--------------------
function handleAssignedDriverBid(state, action){
	return update( state, {
		assignedDrivers:{
			$set: action.payload
		}
	})
}

function handleGetInactiveDrivers(state, action){
	return update( state, {
		inactiveDrivers:{
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	ASSIGNED_DRIVERS:handleAssignedDriverBid,
	GET_INACTIVE_DRIVERS:handleGetInactiveDrivers
}
const initialState = {
  region:{},
};

export function AssignJobsReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}