import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-square',
  templateUrl: './letter-square.component.html',
  styleUrls: ['./letter-square.component.scss']
})
export class LetterSquareComponent implements OnInit {
  #guess?: string;
  @Input() letterNumber: number = 0;
  @Input() set guess(value: string | undefined){
    this.#guess = value;
  }
  
  get letter() {
    return this.#guess?.charAt(this.letterNumber);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
