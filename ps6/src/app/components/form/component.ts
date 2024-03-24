import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();

  onSubmit(): void {
    if (this.searchTerm.length >= 2) {
      this.search.emit(this.searchTerm);
    }
  }
}
