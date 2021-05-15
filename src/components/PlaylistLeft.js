import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import RenderCheckboxes from './RenderCheckboxes'
import SelectPlaylist from './SelectPlaylist';

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
      selectedPlaylistName: "Please select a playlist",
      selectedPlaylist: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
    
  handleSubmit = event => {
    alert(`Selected playlist: ${this.state.selectedPlaylistName}`)
    event.preventDefault()
  }
  handleChange = event => {
    this.setState({
      selectedPlaylistName: event.target.selectedPlaylistName,
      selectedPlaylist: event.target.playlist, //change the value here so that the selectedPlaylist state updates to include whatever playlist is actually selected
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a playlist: 
            <SelectPlaylist playlist={playlists.playlist}/>
            {console.log(playlists.playlist)}
            {/* playlists.map(p => {p.playlist}) */}
            {/* playlists.map(<RenderCheckboxes song={playlist.song} />) */}
          </label>
          <Button style={{margin: "40px", padding: "20px"}} variant="contained" color="primary">Transfer</Button>
          {/* change this "Submit" button to the transfer button to lift state up to App.js or some other parent with the PlaylistRight sibling */}
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
