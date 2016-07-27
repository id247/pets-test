import React from 'react';

import AnswersItem 	from '../../components/answers/AnswersItem';

const QuestionAsk = (props) => (

	<div className="question__ask">

		<h3 className="question__title">
			{props.questionNumber}. {props.title}
		</h3>

		<ul className="question__answers answers">

			{props.answers && props.answers.map( (answer, id) => (

				<AnswersItem 
					key={id}
					answer={answer}
					clickHandler={ () => {
						props.answerClickHandler(answer.id)
					}}
				/>

			))}

		</ul>

	</div>
);

QuestionAsk.propTypes = {
	questionNumber: React.PropTypes.number.isRequired,
	title: React.PropTypes.string.isRequired,
	answers: React.PropTypes.array.isRequired,
	answerClickHandler: React.PropTypes.func.isRequired,
};

export default QuestionAsk;


