import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

  render() {
    return (
      <div className='Counter'>
        <p> Counter: {this.props.counter} </p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state);
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(Counter);