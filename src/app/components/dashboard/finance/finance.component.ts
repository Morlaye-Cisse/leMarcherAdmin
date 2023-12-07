import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      finance works!
    </p>
  `,
  styles: [
  ]
})
export default class FinanceComponent {

}
