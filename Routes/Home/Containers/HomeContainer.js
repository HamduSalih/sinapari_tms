import { connect } from "react-redux";
import Home from "../Components/Home";
import {
	getUserData,
	getDrivers,
	getJobs,
	getDriverBids,
	getInactiveDrivers
} from "../Modules/Home";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.regprocess.userData || {},
	drivers: state.home.drivers || [],
	jobs: state.home.jobs || [],
	acceptedBids: state.home.acceptedBids || [],
	inactiveDrivers: state.home.inactiveDriver || []
});

const mapActionCreators = {
	getUserData,
	getDrivers,
	getJobs,
	getDriverBids,
	getInactiveDrivers
};
export default connect(mapStateToProps, mapActionCreators)(Home);