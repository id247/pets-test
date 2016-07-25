import { combineReducers } from 'redux';

import * as actions from '../actions/questions';

export function data(state = [], action) {
	switch (action.type) {
		case actions.GET_QUESTIONS_START:
		case actions.GET_QUESTIONS_FAIL:
			return 	state;
		case actions.GET_QUESTIONS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
export function type(state = false, action) {
	switch (action.type) {
		case actions.SET_QUESTIONS_TYPE:
			return action.payload;
		default:
			return state;
	}
}
export function activeQuestion(state = 0, action) {
	switch (action.type) {
		case actions.SET_ACTIVE_QUESTION:
			return action.payload;
		default:
			return state;
	}
}
export function answers(state = [], action) {
	switch (action.type) {
		case actions.SET_QUESTION_ANSWER:
			return [...state, action.payload];
		default:
			return state;
	}
}


export const questions = combineReducers({
	type,
	data,
	activeQuestion,
	answers,
});
