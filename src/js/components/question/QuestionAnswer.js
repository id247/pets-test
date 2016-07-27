import React from 'react';

const QuestionAnswer = (props) => (
	<div className="question__answer">

		<div className="question__text">
			<p>{props.answerLabel}</p>
			<p>{props.questionText}</p>
		</div>

		<div className="question__button-placeholder">

			<button 
				className="button button--l button--yellow"
				onClick={ (e) => {
					e.preventDefault();
					props.nextClickHandler();
				}}
			>
				Далее
			</button>

		</div>

	</div>
);

QuestionAnswer.propTypes = {
	answerLabel: React.PropTypes.string.isRequired,
	questionText: React.PropTypes.string.isRequired,
	nextClickHandler: React.PropTypes.func.isRequired,
};

export default QuestionAnswer;
