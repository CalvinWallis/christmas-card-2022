import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  #wordLength = 5;
  #correctWord = 'chief';

  guessedWord$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  
  constructor() { }

  addLetterToWord(letter: string): void {
    const currentWord: string = this.guessedWord$.getValue();
    if(currentWord.length === this.#wordLength){
      return;
    }

    const updatedWord: string = currentWord.concat(letter);

    this.guessedWord$.next(updatedWord);
  }

  removeLetterFromWord(): void {
    const currentWord: string = this.guessedWord$.getValue();

    const updatedWord: string = currentWord.slice(0, -1);

    this.guessedWord$.next(updatedWord);
  }

  submitGuess(): boolean {
    const currentWord: string = this.guessedWord$.getValue();
    if(currentWord.toLowerCase() === this.#correctWord){
      return true;
    }
    return false;
  }

  isValidLetter(key: string): boolean {
    const isLetter = (key >= 'a' && key <= 'z');
    return isLetter;
  }

  
}
