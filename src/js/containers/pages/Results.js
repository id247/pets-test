import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as questionsActions 	from '../../actions/questions';
import * as pageActions 		from '../../actions/page';

const Results = (props) => {

	let resultText = (
		<p>
			Вам стоит чаще обращать внимание на своего питомца! <br/>
			Иногда Вы его совершенно не понимаете.
		</p>
	);

	if (props.correctAnswers > 3){
		resultText = (
			<p>
				Вы неплохо знаете своего питомца! <br/>
				Но чтобы Ваши отношения с ним стали ещё более крепкими и доверительными, <br/>
				будет полезно немного освежить свои знания!
			</p>
		);
	}
	if (props.correctAnswers > 8){
		resultText = (
			<p>
				Вы отлично знаете своего питомца! <br/>
				Наверняка, он Вас просто обожает и с нетерпением ждёт <br/>
				Вашего возвращения домой по вечерам. Неудивительно:  такой <br/>
				внимательный хозяин — мечта каждого домашнего животного!
			</p>
		);
	}

	return (
		<div className={( (props.mix ? props.mix : '') + ' results' )}>

			<div className="results__wrap wrap">

				<div className="results__text">
					<p>
						Вы правильно ответили на <span className="results__correct-answers">{props.correctAnswers}</span> из {props.questionsCount} вопросов
					</p>
					{resultText}
				</div>

				<ul className="results__buttons">

					<li className="results__button-placeholder">

						<a 	href="#" 
							className="button button--l button--yellow button--block"
							target="_blank"
						>
							Узнать больше о питомце
						</a>

					</li>

					<li className="results__button-placeholder">

						<button 
							className="results__button button button--l button--yellow button--block"
							onClick={(e)=> {
								props.setQuestionsType('cat');
							}}
						>
							А что вы знаете про кошек?
						</button>

					</li>

				</ul>

			</div>

		</div>
	)
};

const mapStateToProps = (state, ownProps) => ({
	correctAnswers: (() => {
		let correctAnswers = 0;
		const questions = state.questions.data[state.questions.type];
		const answers = state.questions.answers;

		questions.forEach( (question, id) => {
			if (question.correctAnswer === answers[id].answerId) {
				correctAnswers++;
			}
		});

		return correctAnswers;
	})(),
	questionsCount: state.questions.data[state.questions.type].length,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setQuestionsType: (type) => {
		dispatch(questionsActions.startQuestions(type));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
