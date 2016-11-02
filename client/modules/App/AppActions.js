// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_LOG_IN = 'TOGGLE_LOG_IN';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}
export function toggleLogIn() {
  return {
    type: TOGGLE_LOG_IN,
  };
}
