import React from 'react';
import { Input, Row } from 'react-materialize';

class CreateCourse extends React.Component {

  render() {
    return (
      <div className="container">
        <Row>
          <Input placeholder="Placeholder" s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
          <Input type="password" label="password" s={12} />
          <Input type="email" label="Email" s={12} />
        </Row>
      </div>
    )
  }
}

export default CreateCourse;
