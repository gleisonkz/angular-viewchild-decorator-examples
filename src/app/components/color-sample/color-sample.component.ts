import { Component, Input } from '@angular/core';

@Component({
  selector: 'color-sample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.scss'],
})
export class ColorSampleComponent {
  constructor() {}
  @Input() color: string;
}
