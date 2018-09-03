import React from 'react';
import { Parallax, Input, Row, Button } from 'react-materialize';
import '../../css/materialize.min.css';
import '../../fonts/roboto/Roboto-Bold.woff';

import './LessonTestView.css';

class LessonTest extends React.Component {
  
  onSubmit = (e) => {
    e.preventDefault();

    const currLesson = this.props.lesson;
    const lessonHere = this.props.user.courses[currLesson.courseNum].topics[currLesson.topicNum].lessons[currLesson.lessonNum];

    let doc = document.test;
    let totalGrade = 0;

    let grabResponse = (responses) => {
      return responses.value;
    }

    let getAnswers = questions => {
      return questions.map(question => {
        return {
          question_id : question.question_id,
          question_answer : question.question_answer
        }
      })
    }

    let checkRnA = (correct, response) => {
      if(correct == response){
        totalGrade++;
      }
    }

    let checkAnswer = () => {
      let answers = getAnswers(lessonHere.questions);
      let totalGrade = answers.map(answer => {
        let responseHere = doc['q'+answer.question_id];
        checkRnA(answer.question_answer, grabResponse(responseHere));
      })
    }

    checkAnswer();
    doc.reset();

    console.log("before shipping, the user object is...",this.props.user)

    console.log("before shipping to updateGrade, we have...",this.props.user.account_name,'+', lessonHere.lesson_id, '+', totalGrade)
    this.props.onSubmitButtonClick(this.props.user.account_name, lessonHere.lesson_id, 15);
    console.log("total score is...",totalGrade)
  }

  questionBuilder = (question) => {
    let responses = question.responses.map((response,i) => (
      <Row className="responseText" key={response.response_id}>
        <Input name={'q'+question.question_id} type='radio' value={i} checked={false} />{response.response_text}
      </Row>
    ))
    return (
      <div className="container" key={question.question_id}>
        <h4 className='question'>
          {question.question_text}
        </h4>
        {responses}
      </div>
    )
  }

  render() {
    const currLesson = this.props.lesson;
    console.log("the currLesson is...",currLesson)
    const lesson = this.props.user.courses[currLesson.courseNum].topics[currLesson.topicNum].lessons[currLesson.lessonNum];
    const questions = lesson.questions;
    return (
      <div className="componentBackground">
      <br />
        <form name='test'>
          <h1>{lesson.lesson_name}</h1>
          {questions.map(question => this.questionBuilder(question))}
          <div style={{paddingBottom: '100px'}}>
            <Button waves='light' onClick={this.onSubmit}>Submit Exam</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default LessonTest;
