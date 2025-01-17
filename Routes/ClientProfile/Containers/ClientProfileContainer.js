import { connect } from "react-redux";
import ClientProfile from "../Components/ClientProfile";
import {
	updateProfile
} from "../Modules/ClientProfile";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.home.userData
});

const mapActionCreators = {
	updateProfile
};
export default connect(mapStateToProps, mapActionCreators)(ClientProfile);