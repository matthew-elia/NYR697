// Import Actions
import { TOGGLE_LOG_IN } from './LoginActions';

// Initial State
const initialState = {};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {

		case TOGGLE_LOG_IN:
	    return {
	      showLogIn: !state.showLogIn,
	    };

    default:
      return state;
  }
};

/* Selectors */

// Get getShowLogin
export const getShowLogIn = state => state.app.showLogIn;

export default LoginReducer;