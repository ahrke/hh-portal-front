import React from 'react';
import { Button } from 'react-materialize';

import './LessonSubmitComponent.css';

const LessonSubmitComponent = ({onSubmit}) => {
  return (
    <div>
      <Button s={12} large className='buttStyle' onClick={() => onSubmit()}>Create Lesson</Button>
    </div>
  )
}

export default LessonSubmitComponent;
