import { connect } from "react-redux";
import DriverInfo from "../Components/DriverInfo";
import {
    getDriverLocation
} from "../Modules/DriverInfo";
//states from modules home.js
const mapStateToProps = (state) => ({
    region: state.driverInfo.region,
    currentJob: state.driverInfo.currentJob
});

const mapActionCreators = {
    getDriverLocation
};
export default connect(mapStateToProps, mapActionCreators)(DriverInfo);