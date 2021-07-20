import { Component, Inject, Input, OnInit } from '@angular/core';
import { API_URL } from 'src/app/api.token';
import { ColorSampleService } from 'src/app/services/color-sample.service';

@Component({
  selector: 'color-sample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.scss'],
  providers: [
    { provide: ColorSampleService },
    { provide: API_URL, useValue: 'http://development.com/api' },
  ],
})
export class ColorSampleComponent implements OnInit {
  constructor(
    private colorSampleService: ColorSampleService,
    @Inject(API_URL) private url: string
  ) {}

  ngOnInit(): void {
    this.colorSampleService.prefix = 'color-sample';
  }

  @Input() color: string;
}
