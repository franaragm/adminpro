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

  changeColorTheme(color: string, link: any) {

    this.applyCheckColor(link);

    let url: string = `assets/css/colors/${ color }.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }

  applyCheckColor(link: any) {

    let selectorsHTML: any = document.getElementsByClassName('selector');

    // clean/remove class "working" of all elements with class "selector"
    for( let ref of selectorsHTML ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

}
