import React from 'react'



//change to depend on state of whether the user has pushed the button, spotify has completed migration
const APIPromiseFulfilled = true;
const songs = [
    { title: "Life is a Highway", artist: "Lenny Kkravitz" },
    { title: "What's Up", artist: "Bob Dylan" },
    { title: "Back in Black", artist: "Butthole Surfers" },
    { title: "Blue Suede Shoes", artist: "Blistem of a Frown" },
]

const statusMessage = () => {
    if (APIPromiseFulfilled) {
        return songs.map(whatever => {
            return(<li style={{textAlign: "left"}}>{whatever.title} - {whatever.artist}</li>)
        })
    } else {
        return "Loading..."
    }
}

const PlaylistRight = () => {
    return (
        <div>
            <ul>
                {statusMessage()}
            </ul>
        </div>
    )
}

export default PlaylistRight
