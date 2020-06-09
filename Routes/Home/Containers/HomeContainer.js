import { connect } from "react-redux";
import Home from "../Components/Home";
import {
	getUserData,
	getDrivers,
	getJobs
} from "../Modules/Home";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.regprocess.userData || {},
	drivers: state.home.drivers || [],
	jobs: state.home.jobs || []
});

const mapActionCreators = {
	getUserData,
	getDrivers,
	getJobs
};
export default connect(mapStateToProps, mapActionCreators)(Home);