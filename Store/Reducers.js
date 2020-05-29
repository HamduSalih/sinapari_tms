import { combineReducers } from "redux";
import { LoginReducer as login } from '../Routes/Login/Modules/Login'
import { RegisterReducer as register } from '../Routes/Register/Modules/Register'

export const makeRootReducer = () => {
	return combineReducers({
		login,
		register
	});
}

export default makeRootReducer;