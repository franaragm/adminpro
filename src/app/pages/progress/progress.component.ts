import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  valuePercent1: number = 20;
  valuePercent2: number = 30;

  constructor() {
  }

  ngOnInit() {
  }

}
