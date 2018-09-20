import React from 'react';
import { Input, Row, Button } from 'react-materialize';

import './lessonQs.css';

const qBuilder = (num,q) => {
  let responseArea = q.question_type=='MC'
  ? mcResponses(q)
  : laResponse(q);

  return (
    <div className="lessonQs">
      <h6 s={12}>{num}.
      {q.question_text}</h6>
      {responseArea}
    </div>
  )
}

const selectedRow = (r,s,valueHere) => {
  if(s.toString()==valueHere){
    return (<div><Input name='group1' type='radio' className="selected" value={valueHere} s={1} />
      <h7 className="selected" checked='true' s={10}>{r}</h7></div>)
  } else {
    return (<div><Input name='group1' type='radio' value={valueHere} s={1} />
      <h7 s={10}>{r}</h7></div>)
  }
}

const mcResponses = (q) => {
  return q.responses.map((r,i) => {
    console.log("i in mcResponses is...",i)
    let valueHere = i.toString();
    return (
      <Row>
        {selectedRow(r,q.question_answer,valueHere)}
      </Row>
    )
  })
}

const laResponse = (q) => {
  return (
    <Row>
      <Input type='textarea' placeholder={q.response} />
    </Row>
  )
}

const LessonQ = ({num,data}) => {
  return (
    <div>
      {qBuilder(num, data)}
    </div>
  )
}

export default LessonQ;
