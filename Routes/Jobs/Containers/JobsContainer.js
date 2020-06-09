import { connect } from "react-redux";
import Jobs from "../Components/Jobs";
import {
} from "../Modules/Jobs";
//states from modules home.js
const mapStateToProps = (state) => ({
    jobs: state.home.jobs
});

const mapActionCreators = {
};
export default connect(mapStateToProps, mapActionCreators)(Jobs);