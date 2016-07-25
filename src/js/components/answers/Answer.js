import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Answer = (props) => (
	<button 
		className={(' answers__answer ' + (props.mod ? 'answers__answer--' + props.mod : ''))}
		onClick={props.clickHandler}
		disabled={props.isDisabled === true ? true : false}
	>
		{props.text}
	</button>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
