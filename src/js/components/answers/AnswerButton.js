import React from 'react';

const Answer = (props) => (
	<button 
		className={(' answers__answer ' + (props.mod ? 'answers__answer--' + props.mod : ''))}
		onClick={props.clickHandler}
	>
		{props.text}
	</button>
);

Answer.propTypes = {
	mod: React.PropTypes.string,
	text: React.PropTypes.string,
	clickHandler: React.PropTypes.func.isRequired,
};

export default Answer;
