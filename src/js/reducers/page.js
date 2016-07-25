import * as actions from '../actions/page';

export function page(state = false, action) {
	switch (action.type) {
		case actions.SET_PAGE:
			return action.payload;
		default:
			return state
	}
}


