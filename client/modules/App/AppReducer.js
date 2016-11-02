// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_LOG_IN } from './AppActions';
// Initial State
const initialState = {
  showAddPost: false,
  showLogIn: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_LOG_IN:
      return {
        showLogIn: !state.showLogIn,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getShowLogIn = state => state.app.showLogIn;

// Export Reducer
export default AppReducer;
