import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      setting works!
    </p>
  `,
  styles: [
  ]
})
export default class SettingComponent {

}
