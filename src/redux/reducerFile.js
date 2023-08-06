import { PEOPLE_INFO } from "./actionTypes";

const initialState = {
	userData: [],	
	userDataError: false,
	showLoading: true,
};

const userDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case PEOPLE_INFO.GET_INFO:
			return {
				...state,
				userData: action.payload,
				showLoading: false,
			}			
		
		case PEOPLE_INFO.FAILURE_INFO:
			return {
				...state,
                userData: [],
				userDataError: action.payload,
				showLoading: false,
			}
		default:
			return state;
	}
};
export default userDataReducer;