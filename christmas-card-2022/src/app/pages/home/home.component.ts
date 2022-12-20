import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  guessRow: number = 0;
  currentGuess: string = "";

  constructor(
    private game: GameService
  ) { }

  ngOnInit(): void {
  }

  keyPress(key: string | undefined){
    //TODO: Game logic here
    const guessStarted = this.game.guessedWord$.getValue().length > 0;
    if (key?.toLowerCase() === 'backspace'){
      if(guessStarted){
        this.game.removeLetterFromWord();
      }
    }
    else if(key?.toLowerCase() === 'enter'){
      if(guessStarted){
        console.log(this.game.submitGuess());
      }
    }
    else if(this.game.isValidLetter(key!)){
      this.game.addLetterToWord(key!);
    }
    this.currentGuess = this.game.guessedWord$.getValue();

  }
}
