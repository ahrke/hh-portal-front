import React from 'react';
import { Input, Row, Button } from 'react-materialize';

import './qToAdd.css';

class MC extends React.Component {

  submitQuestion = (e) => {
    e.preventDefault();
    let form = e.target;
    let formE = (e) => form.elements[e].value;

    if(!formE('group1')){
      return alert("you need to select answer")
    }

    let responses = [];
    for(let i = 0; i < 4;i++){
      responses[i] = formE(`response${i+1}`)
    }
    console.log(responses);

    let question = {
      question_type: 'MC',
      question_text: formE('questionText'),
      question_value: formE('questionValue'),
      question_answer: parseInt(formE('group1')),

      responses: responses
    }

    console.log(question);
    this.props.addQ(question);
  }

  mcBuilder = () => {
    return (
      <div>
        <form onSubmit={this.submitQuestion}>
        <Row>
          <Input s={9} name='questionText' label="Question to Ask" labelClassName="labels" />
          <Input s={3} name="questionValue" label="Value of question" labelClassName='labels' />
        </Row>
        <Row>
          <Input name='group1' type='radio' className='rButt' value='0' />
          <Input placeholder="response 1" name='response1' s={11} />
        </Row>
        <Row>
          <Input name='group1' type='radio' className='rButt' value='1' />
          <Input placeholder="response 2" name='response2' s={11} />
        </Row>
        <Row>
          <Input name='group1' type='radio' className='rButt' value='2' />
          <Input placeholder="response 3" name='response3' s={11} />
        </Row>
        <Row>
          <Input name='group1' type='radio' className='rButt' value='3'/>
          <Input placeholder="response 4" name='response4' s={11} />
        </Row>
        <Button s={2}
          icon='add' large className='green butts'
        />
        <span s={2} > </span>
        <Button s={2} onClick={() => this.props.remove()} icon='remove' large className='red butts' />
      </form>
      </div>
    )
  }

  render() {
    let { remove, updateQuestion } = this.props;
    return (
      <div className='qToAdd'>
        <h4>This is a multiple choice question to be added</h4>
        {this.mcBuilder()}
      </div>
    )
  }
}

export default MC;
