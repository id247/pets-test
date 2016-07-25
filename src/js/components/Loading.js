import React from 'react';

const Loading = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' loader ' + (props.loading ? 'loader--visible' : '') )} id="loader">
		<div className="loader__content">Загрузка...</div>
	</div>
);

export default Loading
