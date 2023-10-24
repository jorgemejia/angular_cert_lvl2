import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: {}) {
    const query = localStorage.getItem(key);
    const items = query? JSON.parse(query): {};
    items.push(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string)  {
    const query = localStorage.getItem(key);
    const result = query? JSON.parse(query) : {};
    return result;
  }
}
