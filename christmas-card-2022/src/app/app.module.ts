import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterSquareComponent } from './components/letter-square/letter-square.component';
import { HomeComponent } from './pages/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyboardKeyComponent } from './components/keyboard-key/keyboard-key.component';
import { LetterRowComponent } from './components/letter-row/letter-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterSquareComponent,
    HomeComponent,
    TopNavComponent,
    KeyboardComponent,
    KeyboardKeyComponent,
    LetterRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
