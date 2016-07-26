import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AnswersItem 	from '../../components/answers/AnswersItem';

import * as questionsActions from '../../actions/questions';

class Question extends React.Component {

	constructor(props) {
		super(props);
		this.state ={
			answerVisibility: false,
			answerLabel: '',
		}

		this._showAnswer = this._showAnswer.bind(this);
		this._hideAnswer = this._hideAnswer.bind(this);
	}

	_showAnswer(isCorrect) {
		const text = isCorrect ? 'Правильно! =)' : 'Неправильно =(';
		
		this.setState({...this.state, answerVisibility: true, answerLabel: text});
	}

	_hideAnswer() {
		this.setState({...this.state, answerVisibility: false});
	}



	render() {
		const { props, state } = this;

		return (
			<div className={( (props.mix ? props.mix : '') + ' question ')}>

				<div className="question__wrap wrap">

					<h3 className="question__title">
						{props.activeQuestion + 1}. {props.question.title}
					</h3>

					<ul className="question__answers answers">

						{props.question.answers && props.question.answers.map( (answer, id) => (

							<AnswersItem 
								key={id}
								answer={answer}
								isDisabled={this.state.answerVisibility}
								clickHandler={ (e) => {
									e.preventDefault();
									props.setAnswer(answer.id);
									const isCorrect = props.question.correctAnswer === answer.id;
									this._showAnswer(isCorrect);
								}}
							/>

						))}

					</ul>

					<div className={('question__correct-answer ' + (this.state.answerVisibility ? 'question__correct-answer--visible' : ''))}>

						<div className="question__text">
							<p>{state.answerLabel}</p>
							<p>{props.question.text}</p>
						</div>

						<div className="question__button-placeholder">

							<button 
								className="button button--l button--yellow"
								onClick={ (e) => {
									props.nextQuestion()
									this._hideAnswer();
								}}
							>
								Далее
							</button>

						</div>

					</div>

				</div>

			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	question: state.questions.data[state.questions.type][state.questions.activeQuestion],
	activeQuestion: state.questions.activeQuestion,	
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setAnswer: (answerId) => {		
		dispatch(questionsActions.setQuestionAnswer(answerId));
	},
	nextQuestion: () => {
		dispatch(questionsActions.nextQuestion());		
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
