import { connect } from "react-redux";
import Home from "../Components/Home";
import {
	getUserData
} from "../Modules/Home";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.regprocess.userData || {},
});

const mapActionCreators = {
	getUserData
};
export default connect(mapStateToProps, mapActionCreators)(Home);