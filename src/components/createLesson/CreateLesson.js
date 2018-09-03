import React from 'react';
import { Form, Input, Row } from 'react-materialize';
import AddLessonItem from './AddLessonItem';
import SampleLessonView from './SampleLessonView';

class CreateLesson extends React.Component {
  constructor(){
    super()
    this.state = {
      message: 'bonjour'
    }
  }

  componentDidMount() {
    this.setState({
      message: 'hello worlds'
    })
  }

  handleButtonAdd = () => {
    this.setState({
      message: 'wonderful news!'
    })
  }

  render() {
    const message = this.state.message;
    return (
      <div style={{marginTop:"100px"}}>
          <SampleLessonView />
              <h1>{message}</h1>
          <AddLessonItem onButtonAdd={this.handleButtonAdd} />
      </div>
    )
  }
}

export default CreateLesson;
