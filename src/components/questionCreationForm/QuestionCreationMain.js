import React from 'react';

import QuestionCreationLessonDetails from './QuestionCreationLessonDetails';
import QuestionTypeAdder from './questionTypeAdder/QuestionTypeAdder';
import QuestionToAdd from './questionToAdd/QuestionToAdd';
import LessonSubmitComponent from './lessonSubmitComponent/LessonSubmitComponent';
import LessonDetails from './LessonDetails';

window.id = 0;

class QuestionCreationMain extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      lItem: 1,
      step: 1
    }
  }

  handleAddQ = (q) => {
    let qHere = q;
    qHere.id = window.id++;
    this.state.data.push(qHere)
    this.setState({
      ...this.state,
      data: this.state.data,
      lItem: 0
    })
    console.log(this.state)
  }

  handleAddQuestionType = (type) => {
    let newQuestion = {};
    newQuestion.type = type;
    newQuestion.id = window.id++;
    if(type=='MC'){
      this.setState({
        lItem: '1'
      })
    } else if(type=='LA'){
      this.setState({
        lItem: '2'
      })
    }

    console.log("the current state is...",this.state)
  }

  handleRemoveQuestion = () => {
    this.setState({
      ...this.state,
      lItem: 0
    })
  }

  handleLessonDetail = (e) => {
    e.preventDefault();

    let lessonForm = e.target;
    let lessonFormE = (e) => lessonForm.elements[e].value;

    let lesson_type = (lessonFormE('lessonType') === 1)
      ? 'Test'
      : 'Lecture'
    ;

    this.setState({
      lesson_type: lesson_type,
      lesson_name: lessonFormE('lessonName'),
      lesson_value: lessonFormE('lessonValue'),
      step: 2
    })
  }

  handleSubmitLesson = () => {
    let lesson = {
      lesson_type: this.state.lesson_type,
      lesson_name: this.state.lesson_name,
      lesson_value: this.state.lesson_value,
      questions: this.state.data,
      topic_id: this.props.topic_id
    }
    console.log(lesson)
  }

  lessonQuestionsForm = () => {
    return (
      <div>
        <h2>This is the question creation main page</h2>
        <LessonDetails lessonDetails={this.state} />
        <QuestionToAdd qsToAdd={this.state.lItem} remove={this.handleRemoveQuestion.bind(this)}
         addQ={this.handleAddQ} />
        <LessonSubmitComponent onSubmit={this.handleSubmitLesson} />
        <QuestionTypeAdder onAddClick={this.handleAddQuestionType} currentStat={this.state.lItem} remove={this.handleRemoveQuestion} />
      </div>
    )
  }

  render() {
    let toView = () => {
      return (this.state.step === 1)
      ? <QuestionCreationLessonDetails submitLessonDetail={this.handleLessonDetail} />
      : this.lessonQuestionsForm()
    }

    return (
      <div>
        {toView()}
      </div>
    )
  }
}

export default QuestionCreationMain;
