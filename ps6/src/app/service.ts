import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  fetchData(searchTerm: string): Observable<string[]> {
    // Call your backend API with searchTerm
    // For now, return mock data
    return new Observable(observer => {
      observer.next(['Item 1', 'Item 2', 'Item 3']); // Mock data
      observer.complete();
    });
  }
}
