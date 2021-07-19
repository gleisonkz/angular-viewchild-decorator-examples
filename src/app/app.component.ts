import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { ColorPickerDirective } from 'ngx-color-picker';
import { API_URL } from 'src/app/api.token';
import { ColorSampleComponent } from './components/color-sample/color-sample.component';
import { ColorSampleService } from './services/color-sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-viewchild-decorator-examples';
  primary = '#1976d2';

  ngOnInit(): void {
    console.log('Componente', this.colorSampleComponent);
  }

  ngAfterViewInit(): void {
    this.service.log();
    console.log('Token', this.token);
    console.log('matInput', this.matInput);
    console.log('primaryInput', this.test);
  }

  // recuperando a referencia de um serviço
  @ViewChild(ColorSampleService)
  service: ColorSampleService;

  // recuperando a referencia de um injection token
  @ViewChild(API_URL)
  token: string;

  @ViewChild('primaryInput') test: any;

  // recuperando a referencia de diretivas
  @ViewChild('primaryInput', { read: ColorPickerDirective })
  colorPicker: ColorPickerDirective;

  @ViewChild('primaryInput', { read: MatInput })
  matInput: MatInput;

  // recuperando a referencia de um elemento DOM de um componente
  @ViewChild('primaryColorSample', { read: ElementRef })
  sample: ElementRef;

  // recuperando a referencia de um elemento DOM via template variable
  @ViewChild('title')
  titleElement: ElementRef;

  // recuperando a referencia de um componente
  @ViewChild(ColorSampleComponent, { static: true })
  colorSampleComponent: ColorSampleComponent;

  // tentando recuperar a referencia de um componente dentro de outro
  @ViewChild(MatIcon)
  matIcon: MatIcon;

  // método utilizado para abrir o color picker
  openColorPicker() {
    this.colorPicker.openDialog();
  }
}
