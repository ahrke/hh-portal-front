import React from 'react';
import { Input, Row, Button } from 'react-materialize';

import './qToAdd.css';

class LA extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'LA',
      question_text: '',
      response: ''
    }
  }

  laCreatorForm = (remove,addQ) => {
    return (
      <div>
        <Input onChange={(e) => this.updateQuestionText(e)} placeholder="Question..." s={12} />
        <Input onChange={(e) => this.updateResponsePH(e.target.value)} type='textarea' placeholder="Responses can go here..." s={12} />
        <Button s={4} floating onClick={() => this.props.addQ(this.state)} icon='add' large className='green butts' />
        <span s={2} > </span>
        <Button s={4} floating onClick={() => this.props.remove()} icon="remove" large className='red butts' />
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
      response: text
    })
    console.log(this.state)
  }

  render() {
    let { remove, addQ } = this.props;
    return (
      <div className='qToAdd'>
        <h4>This is a long answer question creation form</h4>
        {this.laCreatorForm(remove, addQ)}
      </div>
    )
  }
}


export default LA;
