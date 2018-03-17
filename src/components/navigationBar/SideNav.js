import React from 'react';
import { Collapsible, CollapsibleItem, Button } from 'react-materialize';
import './SideNav.css';

class SideNav extends React.Component {

  ToView = (value, view, title) => {
    const { changeWorkAreaView } = this.props;
    return (
      <CollapsibleItem header={title}>
        <h3 className='blue-text' onClick={() => changeWorkAreaView(`${view}`)}>{value}</h3>
      </CollapsibleItem>
    )
  }

  CollapsibleBuilder = (header, subheads) => {
    const subs = subheads.map(subhead => {
      return this.ToView(subhead.message,subhead.view,subhead.name)
    })

    return (
      <Collapsible>
        <CollapsibleItem header={header} className="collapsible z-depth-1">
          <Collapsible className="blue grey-text text-lighten-3 popout">
              {subs}
          </Collapsible>
        </CollapsibleItem>
      </Collapsible>
    )
  }

  render() {

    return (
      <div className="side-nav fixed blue-text" id='side-nav-custom'>
        {this.CollapsibleBuilder(
          'OT20245',
          [{name:'Lesson 1',message:'intro to...',view:'lessonView'},
          {name:'Lesson 2',message:'salarys man',view:'lessonView'},
          {name:'Lesson 3',message:'whoa whoa',view:'gen'}])}
        {this.CollapsibleBuilder(
          'Course Tools',
          [{name:'Create Course',message:'New Course',view:'createCourse'},
          {name:'Lesson Tools',message:'New Lesson',view:'createLesson'}]
        )}
      </div>
    )
  }
}

export default SideNav;
