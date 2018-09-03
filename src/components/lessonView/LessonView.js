import React from 'react';
import { Parallax, Input, Row } from 'react-materialize';
import '../../css/materialize.min.css';
import '../../fonts/roboto/Roboto-Bold.woff';

import './LessonView.css';

class LessonView extends React.Component {

  render() {

    return (
      <div>
        <div>
          <iframe style={{width:'100%'}} src="https://docs.google.com/presentation/d/e/2PACX-1vSBldTU9rFsoZD8D87o2lZzNmxe4O_XYPMf8Osc-_wQiNatHtxpB05XMuUwrD4KB582jVfW99QC-C01/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1080" height="720" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

          <Parallax style={{height:'100%'}} imageSrc="http://i0.kym-cdn.com/photos/images/newsfeed/000/751/316/ede.gif"/>

          <div className="section white-lighten q">
            <div className="row container">
              <h2 className="header title">How is a computer like a human body?</h2>
              <p className="grey-text text-darken-3 lighten-3">
                This is a sample text, for the lesson area
              </p>
              <div className="container">
                <h4>
                  The CPU acts like the...whaaaat?
                </h4>
                <Row className='answers'>
                		<Input className='answers' name='group1' type='radio' value='brain' label='brain' />
                		<Input name='group1' type='radio' value='backbone' label='backbone'  />
                		<Input name='group1' type='radio' value='graphics card' label='graphics card'  />
                		<Input name='group1' type='radio' value='motherboard' label='motherboard'  />
                </Row>
              </div>
              <div className="container">
                <h4 className='q'>
                  RAM is an acronym for...?
                </h4>
                <Row className='a'>
                		<Input name='group2' type='radio' value='Red Atom Memory' label='Red Atom Memory' />
                		<Input name='group2' type='radio' value='Rare Antelope Messiahs' label='Rare Antelope Messiahs' />
                		<Input name='group2' type='radio' value='Random Access Memory' label='Random Access Memory'  />
                		<Input name='group2' type='radio' value='Run Around Memory' label='Run Around Memory'  />
                </Row>
              </div>
              <div className="container">
                <h4 className='q'>
                  What are the components INSIDE of a computer?
                </h4>
                <Row className='a'>
                		<Input name='group3' type='checkbox' value='CPU' label='CPU' />
                		<Input name='group3' type='checkbox' value='keyboard' label='keyboard' />
                		<Input name='group3' type='checkbox' value='motherboard' label='motherboard' />
                		<Input name='group3' type='checkbox' value='RAM' label='RAM' />
                    <Input name='group3' type='checkbox' value='monitor' label='monitor' />
                    <Input name='group3' type='checkbox' value='printer' label='printer' />
                    <Input name='group3' type='checkbox' value='hard drive' label='hard drive' />
                    <Input name='group3' type='checkbox' value='magical fairies' label='magical fairies' />
                </Row>
              </div>
            </div>
          </div>
          <Parallax imageSrc="http://cdn.earthporm.com/wp-content/uploads/2015/05/night-sky-stars-milky-way-photography-32__880.jpg"/>

          <iframe width="100%" height="720" src="https://www.youtube.com/embed/z9NuI7B2o-8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}

export default LessonView;
