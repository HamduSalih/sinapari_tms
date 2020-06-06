import { connect } from "react-redux";
import Drivers from "../Components/Drivers";
import {
	
} from "../Modules/Drivers";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.home.userData || {},
	drivers: state.home.drivers || []
});

const mapActionCreators = {
	
};
export default connect(mapStateToProps, mapActionCreators)(Drivers);