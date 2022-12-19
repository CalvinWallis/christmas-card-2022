import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  guessNumber: number = 0;
  currentGuess: string = "";

  constructor(
    private game: GameService
  ) { }

  ngOnInit(): void {
  }

  keyPress(key: string | undefined){
    //TODO: Game logic here
    if(this.game.isValidLetter(key!)){
      this.game.addLetterToWord(key!);
    }
    else if (key?.toLowerCase() === 'backspace'){
      this.game.removeLetterFromWord();
    }
    else if(key?.toLowerCase() === 'enter'){
      console.log(this.game.submitGuess());
    }
    this.currentGuess = this.game.guessedWord$.getValue();

  }
}
