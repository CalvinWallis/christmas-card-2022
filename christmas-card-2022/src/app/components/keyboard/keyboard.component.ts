import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  @HostListener('document:keydown', ['$event'])
  handleKeydownEvent(event: KeyboardEvent){
    this.keyPress(event.key);
  }

  @Output() keyPressed: EventEmitter<string> = new EventEmitter<string>();

  keyPress(value: string | undefined): void {
    if(value){
      this.keyPressed.emit(value);
    }
  }

}
