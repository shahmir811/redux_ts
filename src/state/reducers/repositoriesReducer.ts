import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const INITIAL_STATE = {
	loading: false,
	error: null,
	data: [],
};

const reducer = (state: RepositoriesState = INITIAL_STATE, action: Action): RepositoriesState => {
	const { type } = action;

	switch (type) {
		case ActionType.SEARCH_REPOSITORIES:
			return {
				...state,
				loading: true,
				error: null,
				data: [],
			};

		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				data: action.payload,
			};

		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
				data: [],
			};

		default:
			return state;
	}
};

export default reducer;
