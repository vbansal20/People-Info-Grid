import { PEOPLE_INFO } from "./actionTypes";
import axios from 'axios';

// Action function for fetching user data
export const getUserData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://panorbit.in/api/users.json');
      const userData = response.data.users;
      dispatch({
        type: PEOPLE_INFO.GET_INFO,
        payload: userData,
      });
    } catch (error) {
      dispatch({
        type: PEOPLE_INFO.FAILURE_INFO,
        payload: "Failed to fetch user data!", 
      });
    }
  };
};
