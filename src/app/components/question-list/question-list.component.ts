import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Object[]

  constructor() {
    this.questions = [
      {
        text: 'Whats your name?',
        answer: 'My name is Rodrigo'
      }, 
      {
        text: 'Whats your name?',
        answer: 'My name is Rodrigo'
      }, 
      {
        text: 'Whats your name?',
        answer: 'My name is Rodrigo'
      }, 

    ];
   }

  ngOnInit() {
  }

}
