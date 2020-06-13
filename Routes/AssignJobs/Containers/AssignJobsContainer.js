import { connect } from "react-redux";
import AssignJobs from "../Components/AssignJobs";
import {
	
} from "../Modules/AssignJobs";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.home.userData || {},
	inactiveDrivers: state.home.inactiveDrivers || []
});

const mapActionCreators = {
	
};
export default connect(mapStateToProps, mapActionCreators)(AssignJobs);