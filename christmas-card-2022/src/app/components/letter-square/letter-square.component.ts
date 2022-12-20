import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-letter-square',
  templateUrl: './letter-square.component.html',
  styleUrls: ['./letter-square.component.scss'],
})
export class LetterSquareComponent implements OnInit {
  #guess?: string;
  @Input() letterNumber: number = 0;
  @Input() set guess(value: string | undefined) {
    this.#guess = value;
  }

  get letter() {
    return this.#guess?.charAt(this.letterNumber);
  }

  @Input() rowNumber?: number;

  #guessedWordList$ = this.game.guessedWordList$;
  letterStatus: 'correct' | 'exists' | 'incorrect' | 'empty' = 'empty';

  //TODO get correct word from game service

  constructor(private game: GameService) {}

  ngOnInit(): void {
    this.#guessedWordList$.subscribe((wordList: string[]) => {
      if (wordList.length > 0) {
        const currentRow = this.game.currentRow$.getValue()
        const rowWord = wordList.at(currentRow);
        const answerLetter = this.game.getAnswer().at(this.letterNumber);

        if (currentRow === this.rowNumber) {
          if (answerLetter === rowWord?.at(this.letterNumber)) {
            this.letterStatus = 'correct';
          } else if (
            this.game.getAnswer().includes(rowWord!.at(this.letterNumber)!)
          ) {
            this.letterStatus = 'exists';
          } else {
            this.letterStatus = 'incorrect';
          }
        }
      }
      //TODO check against correct word and the letter return if its correct/exists/incorrect
    });
  }
}
