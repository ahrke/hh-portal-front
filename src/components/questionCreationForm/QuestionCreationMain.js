import React from 'react';

import QuestionCreationLessonDetails from './QuestionCreationLessonDetails';
import QuestionTypeAdder from './questionTypeAdder/QuestionTypeAdder';
import QuestionToAdd from './questionToAdd/QuestionToAdd';
import LessonSubmitComponent from './lessonSubmitComponent/LessonSubmitComponent';

window.id = 0;

class QuestionCreationMain extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      lItem: 1,
      lesson: {}
    }
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
    this.state.data.push(newQuestion);
    this.setState({
      data: this.state.data
    })

    console.log("the current state is...",this.state)
  }

  handleDetailChangeName = (name) => {
    this.setState({
      lesson: {
        ...this.state.lesson,
        lesson_name: name
      }
    })
  }

  handleDetailChangeType = (type) => {
    this.setState({
      lesson: {
        ...this.state.lesson,
        lesson_type: type
      }
    })
  }

  handleDetailChangeValue = (value) => {
    this.setState({
      lesson: {
        ...this.state.lesson,
        lesson_value: value
      }
    })
  }

  handleRemoveQuestion = (id) => {
    let remains = this.state.data.filter(q => {
      if(q.id != id){ return q }
    })
    this.setState({
      ...this.state,
      data: remains
    })
  }

  render() {
    return (
      <div>
        <h2>This is the question creation main page</h2>
        <QuestionCreationLessonDetails onDetailChangeName={this.handleDetailChangeName}
          onDetailChangeType={this.handleDetailChangeType}
          onDetailChangeValue={this.handleDetailChangeValue}/>
        <QuestionToAdd qsToAdd={this.state.data} remove={this.handleRemoveQuestion.bind(this)} />
        <LessonSubmitComponent />
        <QuestionTypeAdder onAddClick={this.handleAddQuestionType} lastItem={this.state.lItem} />
        <div>
          Name: {this.state.lesson.lesson_name}  Type: {this.state.lesson.lesson_type}
        </div>
      </div>
    )
  }
}

export default QuestionCreationMain;
