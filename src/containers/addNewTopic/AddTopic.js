import React from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../../actions';
import CreateTopic from '../../components/createTopic/CreateTopic';
import App from '../../App';

const mapDispatchToProps = dispatch => {
  return {
    onCreateTopicButtonClick: (topic) => {
      dispatch(addTopic(topic))
    }
  }
}

const AddTopic = connect(null, mapDispatchToProps)(CreateTopic);

export default AddTopic;
