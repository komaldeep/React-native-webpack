import globalNavigation from '../components/GlobalNavigation/reducer';
import tabs from '../components/ApplicationTabs/reducer';
import feed from '../components/Feed/reducer';
import { combineReducers } from 'redux-immutable';
import AppReducers  from './Index';
// import { combineReducers } from "redux"

const applicationReducers = {
	globalNavigation: globalNavigation,
	tabs,
	feed,
    AppReducers
};

export default function createReducer() {
	return combineReducers(applicationReducers);
}

