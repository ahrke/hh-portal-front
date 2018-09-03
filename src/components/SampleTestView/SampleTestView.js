import React from 'react';
import { Parallax, Input, Row, Button } from 'react-materialize';
import '../../css/materialize.min.css';
import '../../fonts/roboto/Roboto-Bold.woff';

import './SampleTestView.css';

class SampleTestView extends React.Component {

  onTestSubmit = (e) => {
    e.preventDefault();

    console.log('exam submitted');

    let doc = document.test;

    const grabChecked = (list) => {
      for(let i = 0; i < list.length; i++){
        if(list[i].checked == true){
          return list[i].value;
        }
      }
      return 0;
    }

    let responses = {
      q1: doc.group1.value,
      q2: grabChecked(doc['q2[]']),
      q3: doc.q3.value,
      q4: grabChecked(doc['q4[]']),
      q5: grabChecked(doc['q5[]'])
    }
    console.log(responses);

    let correct = 0;

    const checkAnswer = (correct, response) => {
      return (correct == response)
    }

    if(checkAnswer(3,responses.q1)){correct++};
    if(checkAnswer(3,responses.q2)){correct++};
    if(checkAnswer(1,responses.q3)){correct++};
    if(checkAnswer(2,responses.q4)){correct++};
    if(checkAnswer(4,responses.q5)){correct++};

    console.log(`your score is...${correct}`);
  }

  render() {

    return (
      <div>
        <div>
          <Parallax style={{height:'100%'}} imageSrc="http://vidplane.com/wp-content/uploads/sites/13/2017/09/97e94d340c2cd2504c6e25b74fb3dd8a.gif"/>

          {//}    <iframe style={{width:'100%'}} src="https://docs.google.com/presentation/d/e/2PACX-1vRTr8GKH3KRMOoXqQmB1vJVHoYKyoxVhAAu8yQ-dJ1-E6E3V4kTtKiRV7jeArQ-w9LiLGx-lck57e3Y/embed?start=true&loop=true&delayms=3000" frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          }
          <div className="section white">
            <div className="row container">
              <h2 className="header question">HTML Exam</h2>
              <p className="grey-text text-darken-3 lighten-3">
                Welcome to your HTML exam. Take a deep breath, and exhale slowly. We good?
              </p>
              <p>All right, read questions carefully, some questions have more than one answer (check applicable boxes when that is the case)
              When you are done, please raise your hand, show me, then you may return to your room.</p>
              <p>**Tip: your first answer is usually the correct one**</p>


            </div>
          </div>
          <Parallax imageSrc="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a38661364c1153b472b3ec80114c3cf&auto=format&fit=crop&w=2104&q=80"/>
          <div className="section white">
          <form name='test'>
            <div className="container">
              <h4 className='question'>
                1. What does HTML stand for?
              </h4>
              <Row>
                  <Input name='group1' type='radio' value='1' label='Hyper Turtle Master League' />
                  <Input name='group1' type='radio' value='2' label='Helix Text Metric Labs' />
                </Row>
                <Row>
                  <Input name='group1' type='radio' value='3' label='HyperText Markup Language'  />
                  <Input name='group1' type='radio' value='4' label='Hungry Trespassers Mulling Life' />
              </Row>
            </div>
            <div className="container">
              <h4 className='question'>
                2. What is an element (in regards to HTML)?
              </h4>
              <Row>
                  <Input name='q2[]' type='checkbox' value='1' label='It is one of Earth, Wind, Fire, or Water' />
                </Row>
                <Row>
                  <Input name='q2[]' type='checkbox' value='2' label='It is like...my life, because I am made of Au. Wha whaaa' />
                </Row>
                <Row>
                  <Input name='q2[]' type='checkbox' value='3' label='It describes what an object will be to the DOM'  />
                </Row>
                <Row>
                  <Input name='q2[]' type='checkbox' value='4' label='It is how we style our objects on the webpage' />
                </Row>
                <Row>
              </Row>
            </div>
            <div className="container">
              <h4 className='question'>
                3. How can we represent an element in an HTML document?
              </h4>
              <Row>
                  <Input name='q3' type='radio' value='1' label='Using tags' />
                  <Input name='q3' type='radio' value='2' label='Using Google' />
                </Row>
                <Row>
                  <Input name='q3' type='radio' value='3' label='Using love and peace'  />
                  <Input name='q3' type='radio' value='4' label='Using binary functions' />
                </Row>
                <Row>
              </Row>
            </div>
            <div className="container">
              <h4 className='question'>
                4. What is the proper way to create a tag?
              </h4>
              <Row>
                  <Input name='q4[]' type='checkbox' value='1' label='{Tag}element{Tag} value goes here' />
                </Row>
                <Row>
                  <Input name='q4[]' type='checkbox' value='2' label='<element> value goes here' />
                </Row>
                <Row>
                  <Input name='q4[]' type='checkbox' value='3' label='!element! value goes here'  />
                </Row>
                <Row>
                  <Input name='q4[]' type='checkbox' value='4' label='//element value goes here' />
              </Row>
            </div>
            <div className="container">
              <h4 className='question'>
                5. Do tags need to be closed?
              </h4>
              <Row>
                <Input name='q5[]' type='checkbox' value='1' label='Maybe' />
                <Input name='q5[]' type='checkbox' value='2' label='No' />
              </Row>
              <Row>
                <Input name='q5[]' type='checkbox' value='3' label='Yes'  />
                <Input name='q5[]' type='checkbox' value='4' label='Yes, but there are exceptions' />
              </Row>
            </div>
            <div className="container">
              <h4 className='question'>
                6. Create an Ordered List with 3 items. The title should be "Animals" and the items are 3 different animals you adore
              </h4>
              <Row>
                <Input name='q6' l={12} type='textarea' placeholder='Enter code here...' className='question' />
              </Row>
            </div>
            <div style={{paddingBottom: '100px'}}>
              <Button waves='light' onClick={this.onTestSubmit}>Submit Exam</Button>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SampleTestView;
