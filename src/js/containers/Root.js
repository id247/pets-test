import React from 'react';
import { Provider, connect } from 'react-redux';

import App from '../containers/App';

import * as questionsActions from '../actions/questions';

class Root extends React.Component {

	componentWillMount() {
		const { dispatch } = this.props.store;

		dispatch(questionsActions.questionsGet());	
	}

	render() {
		return (
			<Provider store={this.props.store}>
				<App />
			</Provider>
		);
	}
}

export default Root;
