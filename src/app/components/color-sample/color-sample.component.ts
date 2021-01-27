import { Component, Input } from '@angular/core';
import { ColorSampleService } from 'src/app/services/color-sample.service';

@Component({
  selector: 'color-sample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.scss'],
  providers: [{ provide: ColorSampleService }],
})
export class ColorSampleComponent {
  constructor() {}
  @Input() color: string;
}
