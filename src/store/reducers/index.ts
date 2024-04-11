import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

// Buraya reducer'ları dahil edin
// import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;