import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as questionsActions from '../actions/questions';

import Main 		from '../components/pages/Main';
import Question 	from '../components/pages/Question';
import Results 		from '../components/pages/Results';

import Loading 		from '../components/Loading';

class App extends React.Component {

	componentWillMount() {
		this.props.init();
	}

	render() {	
		const { props } = this;
		const { type: questionsType, activeQuestion } = props.questions;

		let page;
		let bgMod;
		let preloadImages;

		switch (props.page){
			case 'questions':
				page = <Question mixClass="app__content" />;
				bgMod = questionsType + '-' + activeQuestion;

				//super mega ugly shit

				const questionsCount = props.questions.data[questionsType].length - 1;
				
				let bgModNext;
				
				if (activeQuestion === questionsCount){
					bgModNext = 'results';
				}else{
					bgModNext = questionsType + '-' + ( activeQuestion + 1 );
				}

				preloadImages = (
					<div className={(bgModNext ? 'app__container--' + bgModNext : '')}></div>
				);
				
				break;

			case 'results':
				page = <Results mixClass="app__content" />;
				bgMod = 'results';
				break;

			case 'main':
			default:
				page = <Main mixClass="app__content" />;
				preloadImages = (
					<div>
						<div className="app__container--cat-0"></div>
						<div className="app__container--dog-0"></div>
					</div>
				);
		}

		return (
			<div className={('app__container ' + (bgMod ? 'app__container--' + bgMod : '') )}>
				
				<Loading 
					mixClass="app__loader" 
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

				{/*dumb hack for preload images for next page*/}
				{preloadImages}

			</div>
		);
	}

};

App.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
	questions: state.questions,
	page: state.page,
	loading: state.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	init: () => {
		dispatch(questionsActions.questionsGet());	
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
