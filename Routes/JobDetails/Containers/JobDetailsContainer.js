import { connect } from "react-redux";
import JobDetails from "../Components/JobDetails";
import {
	
} from "../Modules/JobDetails"
//states from modules home.js
const mapStateToProps = (state) => ({
    userData:state.home.userData
});

const mapActionCreators = {
	
};
export default connect(mapStateToProps, mapActionCreators)(JobDetails);