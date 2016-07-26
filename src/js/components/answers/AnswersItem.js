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

export default AnswersItem;
