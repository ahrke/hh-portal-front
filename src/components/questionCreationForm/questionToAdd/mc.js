import React from 'react';
import { Input, Row, Button } from 'react-materialize';

import './qToAdd.css';

class MC extends React.Component {
  constructor() {
    super();

    let responses = [];
    for(let i = 0; i < 4;i++){
      responses[i] = {}
    }

    this.state = {
      question_text: '',
      responses: responses
    }
  }

  updateQuestionText = (e) => {
    this.setState({
      ...this.state,
      question_text: e.target.value
    })
  }

  updateResponses = (num, text) => {
    const responses = this.state.responses;

    responses[num].response_text = text.target.value;

    this.setState({
      ...this.state,
      responses
    })
  }

  mcBuilder = () => {
    return (
      <div>
        <Input onChange={(e) => this.updateQuestionText(e)} s={12} label="Question to Ask" labelClassName="labels" />
        <Row>
          <Input name='group1' type='radio' className='rButt' value='0' onChange={(e) => console.log(e.target.value)} s={1} />
          <Input placeholder="response 1" onChange={(e) => this.updateResponses(0,e)} s={11} />
        </Row>
        <Row>
          <Input name='group1' type='radio' className='rButt' value='1' onChange={(e) => console.log(e.target.value)} s={1} />
          <Input placeholder="response 2" onChange={(e) => this.updateResponses(1,e)} s={11} />
        </Row>
        <Row>
          <Input name='group1' type='radio' className='rButt' value='2' onChange={(e) => console.log(e.target.value)} s={1} />
          <Input placeholder="response 3" onChange={(e) => this.updateResponses(2,e)} s={11} />
        </Row>
        <Row>
          <Input name='group1' type='radio' className='rButt' value='3' onChange={(e) => console.log(e.target.value)} s={1} />
          <Input placeholder="response 4" onChange={(e) => this.updateResponses(3,e)} s={11} />
        </Row>
        <Button s={12} onClick={() => this.props.remove(this.props.id)} icon='do_not_disturb_on' className='red' />
      </div>
    )
  }

  render() {
    let { remove } = this.props;
    return (
      <div className='qToAdd'>
        <h4>This is a multiple choice question to be added</h4>
        {this.mcBuilder()}
      </div>
    )
  }
}

export default MC;
