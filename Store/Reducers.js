import { combineReducers } from "redux";
import { LoginReducer as login } from '../Routes/Login/Modules/Login'
import { RegisterReducer as register } from '../Routes/Register/Modules/Register'
import { RegProcessReducer as regprocess } from '../Routes/RegProcess/Modules/RegProcess'
import { HomeReducer as home } from '../Routes/Home/Modules/Home'
import { AddDriverReducer as adddriver } from '../Routes/AddDriver/Modules/AddDriver'
import { DriversReducer as drivers } from '../Routes/Drivers/Modules/Drivers'
import { DriverInfoReducer as driverInfo } from '../Routes/DriverInfo/Modules/DriverInfo'
import { JobsReducer as jobs } from '../Routes/Jobs/Modules/Jobs'
import { JobDetailsReducer as jobDetails } from '../Routes/JobDetails/Modules/JobDetails'
import { BidProcessReducer as bidProcess } from '../Routes/bidProcess/Modules/BidProcess'
import { MyBidsReducer as myBids } from '../Routes/MyBids/Modules/MyBids'
import { AssignJobsReducer as assignJobs } from '../Routes/AssignJobs/Modules/AssignJobs'
import { CurrentJobsReducer as currentJobs } from '../Routes/CurrentJobs/Modules/CurrentJobs'
import { SelectedJobReducer as selectedJob } from '../Routes/SelectedJobDetails/Modules/SelectedJobDetails'
import { ClientProfileReducer as clientProfile } from '../Routes/ClientProfile/Modules/ClientProfile'
import { ReportReducer as report } from '../Routes/Report/Modules/Report'


export const makeRootReducer = () => {
	return combineReducers({
		login,
		register,
		regprocess,
		home,
		adddriver,
		drivers,
		driverInfo,
		jobs,
		jobDetails,
		bidProcess,
		myBids,
		assignJobs,
		currentJobs,
		selectedJob,
		clientProfile,
		report
	});
}

export default makeRootReducer;