import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-row',
  templateUrl: './letter-row.component.html',
  styleUrls: ['./letter-row.component.scss']
})
export class LetterRowComponent implements OnInit {
  #guess?: string;
  @Input() set guess(value: string | undefined){
    this.#guess = value;
  } 

  get guess(): string {
    return this.#guess as string;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
