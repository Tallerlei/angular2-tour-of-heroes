import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import '../src/styles.css';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
