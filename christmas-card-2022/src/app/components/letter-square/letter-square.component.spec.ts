import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSquareComponent } from './letter-square.component';

describe('LetterSquareComponent', () => {
  let component: LetterSquareComponent;
  let fixture: ComponentFixture<LetterSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
