import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public value: string = '';

  onSubmit(): void {
    alert(`value is ${this.value}`);
  }

  onCancel(): void {
    this.value = '';
  }
}
