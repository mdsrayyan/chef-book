import {BookAppState} from '../shared/models/store.model';
import {createSelector} from '@ngrx/store';
import {getBookState, getFavouritesList} from './selectors/case-object.selectors';

export const getAppState = (state: BookAppState) => state;
export const selectBookState = createSelector(getAppState, getBookState);

export const selectFavourites = createSelector(selectBookState, getFavouritesList);
