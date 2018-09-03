import React from 'react';
import { Input, Row, Button } from 'react-materialize';

import './qToAdd.css';

class LA extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  laCreatorForm = () => {
    return (
      <div>
        <Input onChange={(e) => this.updateQuestionText(e)} placeholder="Question..." s={12} />
        <Input onChange={(e) => this.updateResponsePH(e.target.value)} type='textarea' placeholder="Responses can go here..." s={12} />
      </div>
    )
  }

  updateQuestionText = (e) => {
    this.setState({
      ...this.state,
      question_text: e.target.value
    })
  }

  updateResponsePH = (text) => {
    this.setState({
      ...this.state,
      response_placeholder: text
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className='qToAdd'>
        <h4>This is a long answer question creation form</h4>
        {this.laCreatorForm()}
      </div>
    )
  }
}

export default LA;
