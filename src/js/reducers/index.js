import { combineReducers } from 'redux';

import { loading } from './loading';
import { questions } from './questions';
import { page } from './page';

const rootReducer = combineReducers({
	loading,
	questions,
	page,
});

export default rootReducer;
