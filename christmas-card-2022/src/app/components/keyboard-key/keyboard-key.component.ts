import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard-key',
  templateUrl: './keyboard-key.component.html',
  styleUrls: ['./keyboard-key.component.scss']
})
export class KeyboardKeyComponent implements OnInit {
  @Input() keyName?: string;
  @Input() largeKey: boolean = false;
  @HostBinding('class.large') get isLarge() {
    return this.largeKey;
  }

  @Input() clear: boolean = false;
  @HostBinding('class.clear') get isClear() {
    return this.clear;
  }

  @Output() keyPressed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  keyPress(value: string | undefined): void {
    if(value){
      this.keyPressed.emit(value);
    }
  }
}
