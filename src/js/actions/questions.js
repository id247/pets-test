import { APPoptions } from 'app-settings';
import 'whatwg-fetch';

import * as pageActions from '../actions/page';

export const GET_QUESTIONS_START 	= 'GET_QUESTIONS_START';
export const GET_QUESTIONS_SUCCESS 	= 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAIL 	= 'GET_QUESTIONS_FAIL';

export function getQuestionsStart() {
	return {
		type: GET_QUESTIONS_START,
		meta: {
			loading: true
		}
	}
}
export function getQuestionsSuccess(questions) {
	console.log(questions);
	return {
		type: GET_QUESTIONS_SUCCESS,
		payload: questions,
		meta: {
			loading: false
		}
	}
}
export function getQuestionsFail() {
	return {
		type: GET_QUESTIONS_FAIL,
		meta: {
			loading: false
		}
	}
}

export const SET_QUESTIONS_TYPE 	= 'SET_QUESTIONS_TYPE';
export function setQuestionsType(type) {
	return {
		type: SET_QUESTIONS_TYPE,
		payload: type,
	};
}


export const SET_ACTIVE_QUESTION 	= 'SET_ACTIVE_QUESTION';
export function setActiveQuestion(id) {
	return {
		type: SET_ACTIVE_QUESTION,
		payload: id,
	}
}

export const SET_QUESTION_ANSWER 	= 'SET_QUESTION_ANSWER';
export const DELETE_ANSWERS 		= 'DELETE_ANSWERS';
export function setQuestionAnswer(answerId) {
	return (dispatch, getState) => {		

		const activeQuestionId = getState().questions.activeQuestion;

		dispatch({
			type: SET_QUESTION_ANSWER,
			payload: {
				questionId: activeQuestionId, 
				answerId: answerId
			},
		})
	}
}

export function deleteAnswers() {
	return {
		type: DELETE_ANSWERS,
	}
}

export function startQuestions(type) {
	return (dispatch, getState) => {	
		
		dispatch(setQuestionsType(type));
		dispatch(setActiveQuestion(0));
		dispatch(deleteAnswers());
		dispatch(pageActions.setPage('questions'));
	}
}

export function nextQuestion() {
	return (dispatch, getState) => {	

		const questionsState = getState().questions;
		const activeQuestionId = parseInt(questionsState.activeQuestion);
		const nextQuestionId = activeQuestionId + 1;
		const questionsCount = questionsState.data[questionsState.type].length;

		if (nextQuestionId >= questionsCount){
			dispatch(pageActions.setPage('results'));
		}else{
			dispatch(setActiveQuestion(activeQuestionId + 1));
		}

	}
};

export function questionsGet() {
	return (dispatch, getState) => {	
		dispatch(getQuestionsStart());
				
		return fetch(APPoptions.quistionsUrl + '?' + Math.random())
		.then( response => response.json())
		.then( questions => {
			//console.log(questions);
			dispatch(getQuestionsSuccess(questions));
		})
		.catch( err => {
			console.error(err);
			dispatch(getQuestionsFail());
		});
	}
};

