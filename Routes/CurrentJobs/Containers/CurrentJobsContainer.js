import { connect } from "react-redux";
import CurrentJobs from "../Components/CurrentJobs";
import {
	getActiveDrivers
} from "../Modules/CurrentJobs";
//states from modules home.js
const mapStateToProps = (state) => ({
	activeDrivers: state.currentJobs.activeDrivers || []
});

const mapActionCreators = {
	getActiveDrivers
};
export default connect(mapStateToProps, mapActionCreators)(CurrentJobs);