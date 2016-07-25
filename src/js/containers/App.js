import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main 		from '../components/pages/Main';
import Question 	from '../components/pages/Question';
import Results 		from '../components/pages/Results';

import Loading 		from '../components/Loading';

class App extends React.Component {

	render() {	
		const { props } = this;

		let page;

		switch (props.page){
			case 'questions':
				page = <Question />;
				break;
			case 'results':
				page = <Results />;
				break;
			case 'main':
			default:
				page = <Main />
		}

		return (
			<div className="app__container app-container">

				<Loading mix="app-container__loading" />

				<header className="app-container__header header">
					<h1 className="header__title">
						Хорошо ли вы знаете своего питомца?
					</h1>
				</header>

				<div className="app-container__content">

					{page}

				</div>

			</div>
		);
	}

};

const mapStateToProps = (state, ownProps) => ({
	questions: state.questions,
	page: state.page,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
