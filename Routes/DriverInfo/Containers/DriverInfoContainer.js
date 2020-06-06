import { connect } from "react-redux";
import DriverInfo from "../Components/DriverInfo";
import {
} from "../Modules/DriverInfo";
//states from modules home.js
const mapStateToProps = (state) => ({
});

const mapActionCreators = {
};
export default connect(mapStateToProps, mapActionCreators)(DriverInfo);