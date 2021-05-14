import React, { Component } from 'react'
import HeaderLeft from './components/HeaderLeft'
import HeaderRight from './components/HeaderRight'
import SelectPlaylist from './components/SelectPlaylist'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <HeaderLeft />
        <HeaderRight />
        <SelectPlaylist />
      </div>
    );
  }
}

export default App;
