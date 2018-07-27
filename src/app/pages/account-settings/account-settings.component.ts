import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  ngOnInit() {
    this.putCheckColor();
  }

  changeColorTheme(colorTheme: string, link: any) {

    this.applyCheckColor(link);
    this.settingsService.applyTheme(colorTheme);

  }

  applyCheckColor(link: any) {

    let selectorsHTML: any = document.getElementsByClassName('selector');

    // clean/remove class "working" of all elements with class "selector"
    for( let ref of selectorsHTML ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  putCheckColor() {

    let selectorsHTML: any = document.getElementsByClassName('selector');

    let themeColor = this.settingsService.defaultSettings.themecolor;

    for( let ref of selectorsHTML ) {
      if ( ref.getAttribute('data-theme') === themeColor) {
        ref.classList.add('working');
        break;
      }
    }

  }


}
