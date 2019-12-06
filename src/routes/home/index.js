import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from '~/core/redux';
import loading from '~/components/Loading';

class Home extends Component {
	static propTypes = {
		setStore: PropTypes.func
	}

	componentDidMount() {
		setTimeout(() => loading.hide(), 1000);
		loading.show();
		this.props.setStore({
			path: 'home'
		});
	}
	

	render() {
		return (
			<div>
				asd
			</div>
		);
	}
}

export default connect(Home);
