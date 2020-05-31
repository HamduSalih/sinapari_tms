import { combineReducers } from "redux";
import { LoginReducer as login } from '../Routes/Login/Modules/Login'
import { RegisterReducer as register } from '../Routes/Register/Modules/Register'
import { RegProcessReducer as regprocess } from '../Routes/RegProcess/Modules/RegProcess'
import { HomeReducer as home } from '../Routes/Home/Modules/Home'

export const makeRootReducer = () => {
	return combineReducers({
		login,
		register,
		regprocess,
		home
	});
}

export default makeRootReducer;