import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AnswerButton from '../../components/answers/AnswerButton';

import * as questionsActions from '../../actions/questions';

const Main = (props) => (
	<div className={((props.mixClass ? props.mixClass : '') + ' main')}>

		<div className="main__wrap wrap">

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

						<AnswerButton
							mod='cat'
							text='Кошка'
							clickHandler={(e) => { 
								e.preventDefault();
								props.startQuestions('cat');
							}}
						/>

					</li>

					<li className="answers__item">

						<AnswerButton
							mod='dog'
							text='Собака'
							clickHandler={(e) => { 
								e.preventDefault();
								props.startQuestions('dog');
							}}
						/>

					</li>

				</ul>

			</div>
			
		</div>

	</div>
);

Main.propTypes = {
	mixClass: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	startQuestions: (type) => {
		dispatch(questionsActions.startQuestions(type));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
