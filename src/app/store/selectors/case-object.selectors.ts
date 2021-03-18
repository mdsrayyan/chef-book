import {BookObjectState, BookAppState} from '../../shared/models/store.model';

export const getBookState = (bookState: BookAppState) => bookState.bookObjectState;
export const getFavouritesList = (state: BookObjectState) => state.favouritesState;
