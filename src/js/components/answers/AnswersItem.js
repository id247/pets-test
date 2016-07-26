import React from 'react';

import Answer from './Answer';

const AnswersItem = (props) => (
	<li className="answers__item">

		<Answer
			mod={props.answer.id}
			text={props.answer.text}
			isDisabled={props.isDisabled}
			clickHandler={props.clickHandler}
		/>

	</li>
);

export default AnswersItem;
