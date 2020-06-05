import { combineReducers } from "redux";
import { LoginReducer as login } from '../Routes/Login/Modules/Login'
import { RegisterReducer as register } from '../Routes/Register/Modules/Register'
import { RegProcessReducer as regprocess } from '../Routes/RegProcess/Modules/RegProcess'
import { HomeReducer as home } from '../Routes/Home/Modules/Home'
import { AddDriverReducer as adddriver } from '../Routes/AddDriver/Modules/AddDriver'
import { DriversReducer as drivers } from '../Routes/Drivers/Modules/Drivers'

export const makeRootReducer = () => {
	return combineReducers({
		login,
		register,
		regprocess,
		home,
		adddriver,
		drivers
	});
}

export default makeRootReducer;