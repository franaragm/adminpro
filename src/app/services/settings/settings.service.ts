import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  defaultSettings: Settings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    themecolor: 'default-dark'
  }

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  saveSettings() {
    // console.log('Guardado en el localStorage');
    localStorage.setItem('theme_settings', JSON.stringify(this.defaultSettings) );
  }

  loadSettings() {
    if(localStorage.getItem('theme_settings')) {
      // console.log('Cargado de localStorage');
      this.defaultSettings = JSON.parse(localStorage.getItem('theme_settings'));
      this.applyTheme(this.defaultSettings.themecolor);
    } else {
      this.applyTheme(this.defaultSettings.themecolor);
      // console.log('Valores por defecto');
    }
  }

  applyTheme( colorTheme: string ) {

    let url: string = `assets/css/colors/${ colorTheme }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.defaultSettings.themecolor = colorTheme;
    this.defaultSettings.themeUrl = url;
    this.saveSettings();
  }

}

interface Settings {
  themeUrl: string;
  themecolor: string;
}
