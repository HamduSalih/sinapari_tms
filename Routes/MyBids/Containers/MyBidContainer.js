import { connect } from "react-redux";
import MyBids from "../Components/MyBids";
import {
	
} from "../Modules/MyBids";
const mapStateToProps = (state) => ({
    userData: state.home.userData,
    acceptedBids: state.home.acceptedBids
});

const mapActionCreators = {
	
}
export default connect(mapStateToProps, mapActionCreators)(MyBids);