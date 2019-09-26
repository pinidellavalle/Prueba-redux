import React from 'react';
import { connect } from 'react-redux';
import ButtonAdd from './Components/ButtonAdd'
import ButtonSubs from './Components/ButtonSubs'
import ButtonReset from './Components/ButtonReset'
import Counter from './Components/Counter'

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Counter/>
        <ButtonAdd/>
        <ButtonSubs/>
        <ButtonReset/>
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

export default connect(mapStateToProps)(App);