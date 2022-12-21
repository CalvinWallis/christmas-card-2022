import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-keyboard-key',
  templateUrl: './keyboard-key.component.html',
  styleUrls: ['./keyboard-key.component.scss']
})
export class KeyboardKeyComponent implements OnInit {
  @Input() keyName?: string;
  @Input() largeKey: boolean = false;
  @HostBinding('class.large') get isLarge() {
    return this.largeKey;
  }

  @Input() clear: boolean = false;
  @HostBinding('class.clear') get isClear() {
    return this.clear;
  }

  correct: boolean = false;
  incorrect: boolean = false;
  exists: boolean = false;
  @HostBinding('class.correct') get isCorrect() {
    return this.correct;
  }

  @HostBinding('class.incorrect') get isIncorrect() {
    return this.incorrect;
  }

  @HostBinding('class.exists') get isExists() {
    return this.exists;
  }

  @HostListener('click', ['$event'])
  onClick() {
    this.keyPress(this.keyName);
  }

  @Output() keyPressed: EventEmitter<string> = new EventEmitter<string>();

  constructor(private game: GameService) { }

  ngOnInit(): void {
    this.game.correctLetters$.subscribe((letters: string[]) => {
      if(letters.includes(this.keyName!)){
        this.correct = true;
      }
    });

    this.game.incorrectLetters$.subscribe((letters: string[]) => {
      if(letters.includes(this.keyName!)){
        this.incorrect = true;
      }
    });

    this.game.existsLetters$.subscribe((letters: string[]) => {
      if(letters.includes(this.keyName!)){
        this.exists = true;
      }
    });

    this.game.guessedWordList$.subscribe((words: string[]) => {
      if(words.length === 0) {
        this.correct = false;
        this.incorrect = false;
        this.exists = false;
      }
    })
  }

  keyPress(value: string | undefined): void {
    if(value){
      this.keyPressed.emit(value);
    }
  }
}
