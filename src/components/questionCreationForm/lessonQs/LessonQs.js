import React from 'react';
import { Input, Row, Button } from 'react-materialize';
import LessonQ from './LessonQ';

const LessonQs = ({data}) => {
  if(!data[0]){
    console.log("LessonQs called with nothing");
    return null;
  } else {
    console.log("LessonQs called with...something",data)
    let nodes = data.map((q,i) => {
      return (
        <li>
          <LessonQ data={q} num={i+1} />
        </li>
      )
    })

    return (
      <div>
        <h5>Questions</h5>
        <ul>
          {nodes}
        </ul>
      </div>
    )
  }
}

export default LessonQs;
