import React from 'react';
import { Parallax, Input, Row } from 'react-materialize';

class LessonView extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
          <div className="section white">
            <div className="row container">
              <h2 className="header">Parallax</h2>
              <p className="grey-text text-darken-3 lighten-3">
                This is a sample text, for the lesson area
              </p>
              <div className="container">
                <p>
                  Sample question post Lesson
                </p>
                <Row>
                		<Input name='group1' type='checkbox' value='red' label='Red' />
                		<Input name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
                		<Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' />
                		<Input name='group1' type='checkbox' value='brown' label='Brown' disabled='disabled' />
                </Row>
              </div>
            </div>
          </div>
          <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
        </div>
      </div>
    )
  }
}

export default LessonView;
