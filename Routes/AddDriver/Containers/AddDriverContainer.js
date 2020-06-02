import { connect } from "react-redux";
import AddDriver from "../Components/AddDriver";
import {
	
} from "../Modules/AddDriver";
//states from modules home.js
const mapStateToProps = (state) => ({
	
});

const mapActionCreators = {
	
};
export default connect(mapStateToProps, mapActionCreators)(AddDriver);