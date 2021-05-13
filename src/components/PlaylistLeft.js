import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const playlists = [
  {
      playlist: "Workout",
      songs:
      [
          { title: "Life is a Highway", artist: "Lenny Kkravitz" },
          { title: "What's Up", artist: "The Drunken Amberinos" },
          { title: "Back in Black", artist: "Butthole Surfers" },
          { title: "Blue Suede Shoes", artist: "Blistem of a Frown" },
      ]
  },
  {
      playlist: "Driving",
      songs:
      [
          { title: "Bury Me", artist: "Shortstack" },
          { title: "Illegitimate", artist: "The Quasars" },
          { title: "Beck in Beck", artist: "Beckhole" },
          { title: "Fagaysie", artist: "Nate Dogg ft. Warren G" },
      ]
  },
  {
    playlist: "I Don't Feel Like Dancin'",
    songs:
    [
        { title: "Bury Me", artist: "Shortstack" },
        { title: "Illegitimate", artist: "The Quasars" },
        { title: "Beck in Beck", artist: "Beckhole" },
        { title: "Fagaysie", artist: "Nate Dogg ft. Warren G" },
    ]
  },
  {
    playlist: "Showa jamz!!11!1",
    songs:
    [
        { title: "Bury Me", artist: "Shortstack" },
        { title: "Illegitimate", artist: "The Quasars" },
        { title: "Beck in Beck", artist: "Beckhole" },
        { title: "Fagaysie", artist: "Nate Dogg ft. Warren G" },
    ]
  }
]

// const Button = props => {
//   return (
//     <div>
//       <button className='button' onClick={ () => {alert(props.artist)}}>Transfer</button>
//     </div>
//   )
// }

class PlaylistLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Please select a playlist",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
    
  handleSubmit = event => {
    alert(`Selected playlist: ${this.state.value}`)
    event.preventDefault()
  }
  handleChange = event => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a playlist: 
            <select value={this.state.value} onChange={this.handleChange}>
              {playlists.map(p => {
                return (<option value={p.playlist}>{p.playlist}</option>)
              })}
            </select>
          </label>
          <Button variant="contained" color="primary">Submit</Button> {/*change this value="Submit" to the transfer button to lift state up*/}
        </form>
      </div>
    )
  }
}

export default PlaylistLeft

// example from scrimba lesson on getting api data:
// import React, {Component} from "react"

// // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// // https://swapi.co/
// // https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }
    
//     componentDidMount() {
//         this.setState({loading: true})
//         fetch("https://swapi.dev/api/people/1/")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     loading: false,
//                     character: data
//                 })
//             })
//     }
    
//     render() {
//         const text = this.state.loading ? "loading..." : this.state.character.name
//         return (
//             <div>
//                 <p>{text}</p>
//             </div>
//         )
//     }
// }

// export default App
