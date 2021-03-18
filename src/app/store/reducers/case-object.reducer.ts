import * as CaseObjectActionTypes from '../actions/case-object.actions';
import {Action, createReducer, on} from '@ngrx/store';
import {BookObjectState} from '../../shared/models/store.model';


const initialState: BookObjectState = {
  favouritesState: []
} as BookObjectState;


const _caseObjectReducer = createReducer(initialState,
  on(CaseObjectActionTypes.favouritesChange, (state, action) => {
    return {
      ...state,
      favouritesState: action.favouritesList
    };
  })
);


export function caseObjectReducer(state: BookObjectState, action: Action): BookObjectState {
  return _caseObjectReducer(state, action);
}
