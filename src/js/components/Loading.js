import React from 'react';
import { connect } from 'react-redux';

const Loading = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' loader ' + (props.loading ? 'loader--visible' : '') )} id="loader">
		<div className="loader__content">Загрузка...</div>
	</div>
);

const mapStateToProps = (state, ownProps) => ({
	loading: state.loading,
});

export default connect(mapStateToProps, null)(Loading);
