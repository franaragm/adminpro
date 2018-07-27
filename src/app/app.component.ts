import { Component } from '@angular/core';
import {SettingsService} from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // just by injecting, constructor of the service is already loaded
  constructor( public settingsService: SettingsService ) { }

}
