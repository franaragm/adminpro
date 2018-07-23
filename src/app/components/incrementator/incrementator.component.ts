import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styles: []
})
export class IncrementatorComponent implements OnInit {

  // refence a element
  @ViewChild('inputPercent') inputPercent: ElementRef;

  @Input() legend: string = 'Legend';
  @Input() valuePercent: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChanges( newValue: number) {

    if (newValue >= 100) {
      this.valuePercent = 100;
    } else if (newValue<=0) {
      this.valuePercent = 0;
    } else {
      this.valuePercent = newValue;
    }

    this.inputPercent.nativeElement.value = this.valuePercent;

    this.changeValue.emit(this.valuePercent);
  }

  changeValuePercentAction(value: number) {

    if(this.valuePercent >= 100 && value > 0) {
      this.valuePercent = 100;
      return;
    }
    if(this.valuePercent <= 0 && value < 0) {
      this.valuePercent = 0;
      return;
    }

    this.valuePercent = this.valuePercent + value;

    this.changeValue.emit(this.valuePercent);

    this.inputPercent.nativeElement.focus();
  }

}
