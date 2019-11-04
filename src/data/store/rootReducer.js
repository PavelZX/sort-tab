import { combineReducers } from 'redux';

import {noteStore} from "../services/noteService";

export const rootReducer = combineReducers({
    noteStore
});