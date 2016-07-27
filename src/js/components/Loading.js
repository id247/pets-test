import React from 'react';

const Loading = (props) => (
	<div className={( (props.mixClass ? props.mixClass : '') + ' loader ' + (props.loading ? 'loader--visible' : '') )} id="loader">
		<div className="loader__content">Загрузка...</div>
	</div>
);

Loading.propTypes = {
	mixClass: React.PropTypes.string,
	loading: React.PropTypes.bool.isRequired,
};

export default Loading
