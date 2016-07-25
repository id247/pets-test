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
		}

		this._showAnswer = this._showAnswer.bind(this);
		this._hideAnswer = this._hideAnswer.bind(this);
	}

	_showAnswer() {
		this.setState({answerVisibility: true});
	}

	_hideAnswer() {
		this.setState({answerVisibility: false});
	}


	render() {
		const { props } = this;

		return (
			<div className="question">

				<h3 className="question__title">
					{props.question.title}
				</h3>

				<ul className="question__answers answers">

					{props.question.answers && props.question.answers.map( (answer, id) => (

						<AnswersItem 
							key={id}
							answer={answer}
							questionsType={props.question.type}
							isDisabled={this.state.answerVisibility}
							clickHandler={ (e) => {
								e.preventDefault();
								if (props.question.correctAnswer === answer.id){
									console.log('Ты прав!!!')
								}
								props.setAnswer(answer.id);
								this._showAnswer();
							}}
						/>

					))}

				</ul>

				<div className={('question__correct-answer ' + (this.state.answerVisibility ? 'question__correct-answer--visible' : ''))}>

					<div className="question__text">
						{props.question.text}
					</div>

					<div className="question__button-placeholder">

						<button 
							className="button"
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
