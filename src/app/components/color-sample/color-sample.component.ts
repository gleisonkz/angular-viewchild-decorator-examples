import { Component, Input, OnInit } from '@angular/core';
import { ColorSampleService } from 'src/app/services/color-sample.service';

@Component({
  selector: 'color-sample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.scss'],
  providers: [{ provide: ColorSampleService }],
})
export class ColorSampleComponent implements OnInit {
  constructor(private colorSampleService: ColorSampleService) {}

  ngOnInit(): void {
    this.colorSampleService.prefix = 'color-sample';
  }

  @Input() color: string;
}
