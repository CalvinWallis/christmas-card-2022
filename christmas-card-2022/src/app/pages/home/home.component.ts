import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  guessRow: number = 0;
  currentGuess: string = "";
  gameComplete: boolean = false;

  constructor(
    private game: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.game.init();
  }

  keyPress(key: string | undefined){
    const guessStarted = this.game.guessedWord$.getValue().length > 0;
    if (key?.toLowerCase() === 'backspace'){
      if(guessStarted){
        this.game.removeLetterFromWord();
      }
    }
    else if(key?.toLowerCase() === 'enter'){
      if(guessStarted){
        this.gameComplete = this.game.submitGuess();
      }
    }
    else if(this.game.isValidLetter(key!)){
      this.game.addLetterToWord(key!);
    }
    this.currentGuess = this.game.guessedWord$.getValue();

  }

  reset() {
    this.game.reset();
    this.currentGuess = this.game.guessedWord$.getValue();
    this.gameComplete = false;
  }

  continue() {
    this.game.reset();
    this.router.navigateByUrl('card');
  }
}
