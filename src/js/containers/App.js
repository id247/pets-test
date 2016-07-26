import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main 		from '../containers/pages/Main';
import Question 	from '../containers/pages/Question';
import Results 		from '../containers/pages/Results';

import Loading 		from '../components/Loading';

class App extends React.Component {

	render() {	
		const { props } = this;

		let page;
		let bgMod;

		switch (props.page){
			case 'questions':
				page = <Question mix="app__content" />;
				bgMod = props.questions.type + '-' + props.questions.activeQuestion 
				break;
			case 'results':
				page = <Results mix="app__content" />;
				bgMod = 'results';
				break;
			case 'main':
			default:
				page = <Main mix="app__content" />;
		}

		return (
			<div className={('app__container ' + (bgMod ? 'app__container--' + bgMod : '') )}>

				<Loading 
					mix="app__loader" 
					loading={props.loading}
				/>

				<header className="app__header header">
					
					<div className="header__wrap wrap">
						
						<h1 className="header__title">
							Хорошо ли вы знаете своего питомца?
						</h1>

					</div>

				</header>

				{page}

			</div>
		);
	}

};

const mapStateToProps = (state, ownProps) => ({
	questions: state.questions,
	page: state.page,
	loading: state.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
