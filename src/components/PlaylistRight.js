import React, { Component } from 'react'


const songs = [
    { title: "Life is a Highway", artist: "Lenny Kkravitz" },
    { title: "What's Up", artist: "Bob Dylan" },
    { title: "Back in Black", artist: "Butthole Surfers" },
    { title: "Blue Suede Shoes", artist: "Blistem of a Frown" },
]

class PlaylistRight extends Component {
   constructor(props) {
      super(props)

//change to depend on state of whether the user has pushed the button, spotify has completed migration
      this.state = {
         isLoading: true,
      }
   }

    statusMessage = () => {
        if (this.state.isLoading) {
            return songs.map(whatever => {
                return(<li style={{textAlign: "left"}}>{whatever.title} - {whatever.artist}</li>)
            })
        } else {
            return "Loading..."
        }
    }

    render() {
      return (
         <div>
            <ul>
                  {this.statusMessage()}
            </ul>
         </div>
      )
    }
}


export default PlaylistRight
