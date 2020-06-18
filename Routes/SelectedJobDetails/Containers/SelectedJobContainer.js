import { connect } from "react-redux";
import SelectedJobDetails from "../Components/SelectedJobDetails";
import {
} from "../Modules/SelectedJobDetails";
//states from modules home.js
const mapStateToProps = (state) => ({
});

const mapActionCreators = {
};
export default connect(mapStateToProps, mapActionCreators)(SelectedJobDetails);