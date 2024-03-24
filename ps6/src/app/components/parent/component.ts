import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  responseData: string[] = [];

  constructor(private dataService: DataService) { }

  getData(searchTerm: string): void {
    this.dataService.fetchData(searchTerm).subscribe(data => {
      this.responseData = data;
    });
  }
}
