import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QuestionAsk 	from '../../components/question/QuestionAsk';
import QuestionAnswer 	from '../../components/question/QuestionAnswer';

import * as questionsActions from '../../actions/questions';

class Question extends React.Component {

	constructor(props) {
		super(props);
		this.state ={
			isAnswerChosen: false,
			answerLabel: '',
		}

		this._showAnswer = this._showAnswer.bind(this);
		this._hideAnswer = this._hideAnswer.bind(this);
	}

	_showAnswer(isCorrect) {
		const text = isCorrect ? 'Правильно! =)' : 'Неправильно =(';
		
		this.setState({...this.state, isAnswerChosen: true, answerLabel: text});
	}

	_hideAnswer() {
		this.setState({...this.state, isAnswerChosen: false});
	}

	render() {
		const { props, state } = this;

		let content;

		if (state.isAnswerChosen){
			content = <QuestionAnswer 
						answerLabel={state.answerLabel}
						questionText={props.question.text}
						nextClickHandler={() => {
							props.nextQuestion()
							this._hideAnswer();
						}}
						/>	
		}else{
			content = <QuestionAsk 
						questionNumber={props.activeQuestion + 1}
						title={props.question.title}
						answers={props.question.answers}	
						answerClickHandler={(answerId) => {
							props.setAnswer(answerId);
							const isCorrect = (props.question.correctAnswer === answerId);
							this._showAnswer(isCorrect);
						}}				
					/>
		}

		return (
			<div className={( (props.mixClass ? props.mixClass : '') + ' question ')}>

				<div className="question__wrap wrap">

					{content}								

				</div>

			</div>
		);
	}
}

Question.propTypes = {
	mixClass: React.PropTypes.string,
};

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
