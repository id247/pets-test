import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Answer from './Answer';

const AnswersItem = (props) => (
	<li className="answers__item">

		<Answer
			mod={props.questionsType}
			text={props.answer.text}
			isDisabled={props.isDisabled}
			clickHandler={props.clickHandler}
		/>

	</li>
);

const mapStateToProps = (state, ownProps) => ({
	questionsType: state.questions.type,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswersItem);
