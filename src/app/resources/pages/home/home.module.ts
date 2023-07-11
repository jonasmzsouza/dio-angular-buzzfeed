import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { QuizzComponent } from './components/quizz/quizz.component';



@NgModule({
  declarations: [
    HomeComponent,
    QuizzComponent
  ],
  imports: [
    CommonModule
  ],
	exports: [
		HomeComponent,
	]
})
export class HomeModule { }
