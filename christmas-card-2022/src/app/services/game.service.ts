import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { answers } from 'src/assets/answers';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  #wordLength: number = 5;
  #answer: string = 'chief';

  currentRow$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  guessedWord$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  guessedWordList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  
  constructor() { }

  init(){
    const min = Math.ceil(0);
    const max = Math.floor( answers.length);
    const index = Math.floor(Math.random() * (max - min) + min);
    this.#answer = answers.at(index)!;
  }

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
    const currentRow: number = this.currentRow$.getValue();
    const currentWord: string = this.guessedWord$.getValue();
    const guessedWords: string[] = this.guessedWordList$.getValue();

    this.guessedWordList$.next([...guessedWords, currentWord]);

    if(currentWord.toLowerCase() === this.#answer){
      return true;
    }

    this.guessedWord$.next('');
    this.currentRow$.next(currentRow + 1);
    return false;
  }

  isValidLetter(key: string): boolean {
    if(key.length === 1){
      const isLetter = (key >= 'a' && key <= 'z');
      return isLetter;
    }
    return false;
    
  }

  getAnswer(): string {
    return this.#answer;
  }
  
  reset(): void {
    this.guessedWordList$.next([]);
    this.guessedWord$.next('');
    this.currentRow$.next(0);
    this.init();
  }
}
