import { combineReducers } from 'redux';
import pets from './pets';
// We would import here all the other data models in our app and combine them into a rootReducer
const rootReducer = combineReducers({ pets });

export default rootReducer;
