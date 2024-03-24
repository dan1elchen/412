import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;

  constructor(private dataService: DataService) {}

  getData() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
