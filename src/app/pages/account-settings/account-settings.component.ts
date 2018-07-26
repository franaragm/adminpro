import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {
  }

  changeColorTheme(color: string) {
    console.log(color);

    let url: string = `assets/css/colors/${ color }.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }

}
