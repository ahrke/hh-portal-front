import React from 'react';
import { Button, Form, Input, Row } from 'react-materialize';

import './QuestionTypeAdder.css';

const qTypeAdderForm = (adder) => {
  let inputHere;
  return (
    <Button floating fab='horizontal' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>
      <Button floating s={4} className='red' waves='light' onClick={() => {
          adder('MC')
      }} icon='format_list_bulleted' />
      <Button floating s={4} className='red' waves='light' onClick={() => {
          adder('LA')
      }} icon='border_color' />
    </Button>

  )
}

const qRemoveButt = (remove) => {
  return (
    <Button floating fab onClick={() => {
      remove();
    }} icon='do_not_disturb_on' className='red' large style={{bottom: '45px', right: '24px'}}>
    </Button>
  )
}

const QuestionTypeAdder = ({onAddClick, currentStat,remove}) => {
  return (
    <div>
      {
        currentStat==0
        ? qTypeAdderForm(onAddClick)
        : <div></div>
      }
    </div>
  )
}

export default QuestionTypeAdder;
