import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  options = {
    direction: 'ltr'
  };

  @Output() directionEvent = new EventEmitter<Object>();

  ngOnInit() {
    // Customizer JS File
    $.getScript('./assets/js/customizer.js');
  }

  sendOptions() {    
    this.directionEvent.emit(this.options);
  }

}
