import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

export interface IAppState {
  router?: any;
};

export const rootReducer = combineReducers<IAppState>({
  router: routerReducer
});
