import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './core/redux/store';
import './core/setRem';
import './style/common.scss';

let root;
function init() {
	let App = require('./components/App').default;
	root = render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root'), root);
}

init();



