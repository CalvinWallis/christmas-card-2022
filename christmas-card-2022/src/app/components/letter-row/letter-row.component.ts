import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-letter-row',
  templateUrl: './letter-row.component.html',
  styleUrls: ['./letter-row.component.scss']
})
export class LetterRowComponent implements OnInit {
  #guess?: string;
  @Input() set guess(value: string | undefined){
    if(this.rowNumber === this.game.currentRow$.getValue()){
      this.#guess = value;
    }
  } 

  get guess(): string {
    return this.#guess as string;
  }

  @Input() rowNumber: number = 0;

  constructor(private game: GameService) { }

  ngOnInit(): void {
  }

}
