import React, { useState } from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'

//change this to data fetched from youtube music api
const playlists = [
    { label: "Workout", value: 1 }, //MUST have a "label" and "value" to work with react-select class
    { label: "Driving", value: 2 },
    { label: "Chill", value: 3 },
    { label: "Shower Jamz", value: 4 },
]

const PlaylistLeft = () => {
    // const [selectedPlaylist, handleChange] = useState({});
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4" style={{margin: "auto", minWidth: "300px"}}>
                    <Select options={playlists} placeholder={"Select a Playlist"} />
                    {/* <button onClick={() => {alert(this.handleChange(selectedPlaylist))}}>Test</button> */}
                </div>
            </div>
        </div>
    )
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
