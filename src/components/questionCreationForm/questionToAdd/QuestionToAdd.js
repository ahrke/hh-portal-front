import React from 'react';
import MC from './mc';
import LA from './la';

const QuestionToAdd = ({qsToAdd, remove}) => {
  console.log("currently, qsToAdd from QuestionToAdd is...",qsToAdd)

  const nodeHere = qsToAdd.map(q => {
    console.log("q is currently...",q)
    if(q.type=='MC'){
      return (<li><MC remove={remove} id={q.id} /></li>);
    } else if(q.type=='LA'){
      return (<li><LA remove={remove} id={q.id} /></li>);
    }
  })


      console.log("nodeHere is...",nodeHere)

  return (
    <ul>
      {nodeHere}
    </ul>
  )
}

export default QuestionToAdd;
