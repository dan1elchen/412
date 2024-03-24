import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_DATA } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<any[]> {
    // Simulate fetching data from Node backend
    return of(MOCK_DATA);
  }
}
