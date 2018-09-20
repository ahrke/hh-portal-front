import React from 'react';
import MC from './mc';
import LA from './la';

const QuestionToAdd = ({qsToAdd, remove, addQ}) => {

  const nodeHere = () => {
    if(qsToAdd==1){
      return (<MC remove={remove} addQ={addQ} />);
    } else if(qsToAdd==2){
      return (<LA remove={remove} addQ={addQ} />);
    } else {
      return
    }
  }

  return (
    <div>
      {nodeHere()}
    </div>
  )
}

export default QuestionToAdd;
