import React from 'react';

import AnswerButton from './AnswerButton';

const AnswersItem = (props) => (
	<li className="answers__item">

		<AnswerButton
			mod={props.answer.id}
			text={props.answer.text}
			isDisabled={props.isDisabled}
			clickHandler={props.clickHandler}
		/>

	</li>
);

AnswersItem.propTypes = {
	text: React.PropTypes.string,
	isDisabled: React.PropTypes.bool,
	answer: React.PropTypes.object.isRequired,
	clickHandler: React.PropTypes.func.isRequired,
};

export default AnswersItem;
