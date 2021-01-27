import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { ColorPickerDirective } from 'ngx-color-picker';
import { ColorSampleComponent } from './components/color-sample/color-sample.component';
import { ColorSampleService } from './services/color-sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-viewchild-decorator-examples';
  primary = '#1976d2';

  ngAfterViewInit(): void {
    this.service.log();
    console.log('matInput', this.matInput);
  }

  // recuperando a referencia de um serviço
  @ViewChild(ColorSampleService)
  service: ColorSampleService;

  // recuperando a referencia de diretivas
  @ViewChild('primaryInput', { read: ColorPickerDirective })
  colorPicker: ColorPickerDirective;

  @ViewChild('primaryInput', { read: MatInput })
  matInput: MatInput;

  // recuperando a referencia do elemento DOM de um componente
  @ViewChild('primaryColorSample', { read: ElementRef })
  sample: ElementRef;

  // recuperando a referencia de um elemento DOM via template variable
  @ViewChild('title')
  titleElement: ElementRef;

  // recuperando a referencia de um componente
  @ViewChild(ColorSampleComponent)
  colorSampleComponent: ColorSampleComponent;

  // tentando recuperar a referencia de um componente dentro de outro
  @ViewChild(MatIcon)
  matIcon: MatIcon;

  openColorPicker() {
    this.colorPicker.openDialog();
  }
}
