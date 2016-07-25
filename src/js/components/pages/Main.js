import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Answer 	from '../../components/answers/Answer';

import * as questionsActions 	from '../../actions/questions';
import * as pageActions 		from '../../actions/page';

const Main = (props) => (
	<div className="main">

		<div className="main__text">
			<p>
				Домашние животные нуждаются в нашей заботе не меньше, 
				чем любой другой член семьи. 
				Но всегда ли мы правильно понимаем их настроение? 
				Пройдите тест и узнайте, хорошо ли вы разбираетесь в поведении своего питомца.
			</p>
		</div>

		<div className="main__question question">

			<h3 className="question__title">
				У вас кошка или собака?
			</h3>

			<ul className="question__answers answers">

				<li className="answers__item">

					<Answer
						mod='cat'
						text='Кошка'
						clickHandler={(e) => { 
							e.preventDefault();
							props.setQuestionsType('cat');
						}}
					/>

				</li>

				<li className="answers__item">

					<Answer
						mod='dog'
						text='Собака'
						clickHandler={(e) => { 
							e.preventDefault();
							props.setQuestionsType('dog');
						}}
					/>

				</li>

			</ul>

		</div>

	</div>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setQuestionsType: (type) => {
		dispatch(questionsActions.setQuestionsType(type));
		dispatch(pageActions.setPage('questions'));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
