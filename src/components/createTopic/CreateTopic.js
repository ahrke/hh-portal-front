import React from 'react';
import { Input, Row, Button } from 'react-materialize';

import './CreateTopic.css';

class CreateTopic extends React.Component {

  addTopic = (e) => {
    e.preventDefault();

    let form = e.target;
    let formE = (e) => form.elements[e].value;
    let newTopic = {
      course_id: this.props.course_id,
      topic_name: formE('topicName')
    }
    console.log(newTopic)

    this.props.onCreateTopicButtonClick(newTopic)
  }

  render() {
    console.log("the currentCourse is...",this.props.course_id)
    return (
      <div className="createTopic">
      <form onSubmit={this.addTopic}>
        <Row>
          <Input s={12} label="Topic Name" name='topicName' />
          <Button s={4}
            large icon='add' className='green butts'
          />
        </Row>
      </form>
      </div>
    )
  }
}

export default CreateTopic;
