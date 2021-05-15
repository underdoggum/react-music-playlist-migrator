import React, { Component } from 'react'
import HeaderLeft from './components/HeaderLeft'
import HeaderRight from './components/HeaderRight'


class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <HeaderLeft />
        <HeaderRight />
      </div>
    );
  }
}

export default App;
