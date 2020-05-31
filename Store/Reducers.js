import { combineReducers } from "redux";
import { LoginReducer as login } from '../Routes/Login/Modules/Login'
import { RegisterReducer as register } from '../Routes/Register/Modules/Register'
import { RegProcessReducer as regProcess } from '../Routes/RegProcess/Modules/RegProcess'

export const makeRootReducer = () => {
	return combineReducers({
		login,
		register,
		regProcess
	});
}

export default makeRootReducer;