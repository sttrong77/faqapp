import { Injectable } from '@angular/core';
import { Question } from '../models/Question'

@Injectable()
export class DataService {

  questions: Question[]

  constructor() { 
    // this.questions = [
    //   {
    //     text: 'Whats your name?',
    //     answer: 'My name is Rodrigo',
    //     hide: true
    //   }, 
    //   {
    //     text: 'Whats your name?',
    //     answer: 'My name is Rodrigo',
    //     hide: true
    //   }, 
    //   {
    //     text: 'Whats your name?',
    //     answer: 'My name is Rodrigo',
    //     hide: true
    //   }, 

    // ];
  }

  // Get Questions from LS
  getQuestions(){
    if(localStorage.getItem('questions') === null ){
      this.questions = []
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'))
    }
    return this.questions
  }

   // Add Questions from LS
  addQuestion(question: Question){
    this.questions.unshift(question)

    //Init local var
    let questions

    if(localStorage.getItem('questions') === null ){
      questions = []
      //Push new question
      questions.unshift(question)
      //Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions))

    } else {
      questions = JSON.parse(localStorage.getItem('questions'))
      //Add new question
      questions.unshift(question)

      localStorage.setItem('questions', JSON.stringify(questions))
    }
  }

   // Remove Questions from LS
  removeQuestion(question: Question){
    // console.log('remove')
    for(let i = 0; i < this.questions.length; i++){
      if(question ==  this.questions[i]){
        // console.log('caiu no if')
        this.questions.splice(i,1)
        localStorage.setItem('questions', JSON.stringify(this.questions))
      }
    }
  }

  
}
