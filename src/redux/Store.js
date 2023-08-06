import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './reducerFile'; 

const store = configureStore({
  reducer: {
    data: userDataReducer, 
  },
});

export default store;


