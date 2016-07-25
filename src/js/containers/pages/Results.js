import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Results = (props) => (
	<div className="results">

		<div className="results__text">
			<p>
				Вы правильно ответили на {props.correctAnswers} из {props.questionsCount} вопросов
			</p>
			<p>
				Вам стоит чаще обращать внимание на своего питомца! <br/>
				Иногда Вы его совершенно не понимаете.
			</p>
		</div>

	</div>
);

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
