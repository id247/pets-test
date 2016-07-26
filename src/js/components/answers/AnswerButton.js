import React from 'react';

const Answer = (props) => (
	<button 
		className={(' answers__answer ' + (props.mod ? 'answers__answer--' + props.mod : ''))}
		onClick={props.clickHandler}
		disabled={props.isDisabled === true ? true : false}
	>
		{props.text}
	</button>
);

export default Answer;
