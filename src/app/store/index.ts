import {BookAppState, BookObjectState} from '../shared/models/store.model';
import {ActionReducer, ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import {getBookState, getFavouritesList} from './selectors/case-object.selectors';
import {environment} from '../../environments/environment.prod';
import {caseObjectReducer} from './reducers/case-object.reducer';

export const reducers: ActionReducerMap<BookAppState> = {
  bookObjectState: caseObjectReducer
};

export function logger(reducer: ActionReducer<BookAppState>): ActionReducer<BookAppState> {
  return (state: BookAppState, action: any): BookAppState => {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<BookAppState>[] = !environment.production
  ? [logger]
  : [];

export const getAppState = (state: BookAppState) => state;
export const selectBookState = createSelector(getAppState, getBookState);

export const selectFavourites = createSelector(selectBookState, getFavouritesList);
