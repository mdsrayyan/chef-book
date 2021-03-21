import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  capitalize(optionString: string): string {
    return optionString.charAt(0).toUpperCase() + optionString.slice(1).toLowerCase();
  }
}
