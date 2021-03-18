import {createAction} from '@ngrx/store';
import {Recipe} from '../../shared/models/book.model';

enum CaseObjectActionTypes {
  LoadFavourites = '[Load Favourites Object] update case object'
}

export const favouritesChange = createAction(
  CaseObjectActionTypes.LoadFavourites, (value: Recipe[]) => ({favouritesList: value})
);

