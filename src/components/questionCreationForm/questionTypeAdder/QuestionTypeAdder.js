import React from 'react';
import { Button, Form, Input, Row } from 'react-materialize';

import './QuestionTypeAdder.css';

const backupQTypeAdder = (adder, lastItem) => {
  let inputHere;
  return (
      <div>
        <Row>
          <Input ref={node => {inputHere = node}} s={10} type='select' labelClassName='labels' label="Materialize Select" defaultValue={lastItem}>
            <option value='1'>Multiple Choice</option>
            <option value='2'>Long Answer</option>
            <option value='3'>something...</option>
          </Input>
          <Button s={2} floating large className='red' waves='light' onClick={() => {
            console.log("clicked the add button, inputHere value is...",inputHere);
            if(inputHere.state.value=='1'){
              adder('MC')
            } else if(inputHere.state.value=='2'){
              adder('LA')
            }
          }} icon='add' />
        </Row>
      </div>
    )
}

const qTypeAdderForm = (adder, lastItem) => {
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

const QuestionTypeAdder = ({onAddClick, lastItem}) => {
  return (
    <div>
      {qTypeAdderForm(onAddClick, lastItem)}
    </div>
  )
}

export default QuestionTypeAdder;
