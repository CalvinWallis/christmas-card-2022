import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  
}
