import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRuntimeVariable } from './actions';

function mapStateToProps(state) {
	return state || {};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ setStore: setRuntimeVariable }, dispatch);
}

export default function(components){
	return connect(mapStateToProps, mapDispatchToProps)(components);
}