import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
    reducers: repositoriesReducer
})

export default reducers;