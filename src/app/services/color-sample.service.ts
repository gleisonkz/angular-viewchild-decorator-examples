import { Injectable } from '@angular/core';

@Injectable()
export class ColorSampleService {
  prefix = 'service';

  log() {
    console.log(`Current Prefix:${this.prefix}`);
  }
}
