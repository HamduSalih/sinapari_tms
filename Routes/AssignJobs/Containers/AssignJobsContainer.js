import { connect } from "react-redux";
import AssignJobs from "../Components/AssignJobs";
import {
	assignedDriverBid
} from "../Modules/AssignJobs";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.home.userData || {},
	inactiveDrivers: state.home.inactiveDrivers || [],
	assignedDrivers: state.assignJobs.assignedDrivers
});

const mapActionCreators = {
	assignedDriverBid
};
export default connect(mapStateToProps, mapActionCreators)(AssignJobs);