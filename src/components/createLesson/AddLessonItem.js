import React, { Component } from 'react';
import { Button } from 'react-materialize';

class AddLessonItem extends Component {

  render() {
    return (
      <div>
        <h1>'Im the lesson item adder, maaaaang!'</h1>
        <Button floating large className='red' waves='light' icon='+' onClick={this.props.onButtonAdd} />
      </div>
    )
  }
}

export default AddLessonItem;
