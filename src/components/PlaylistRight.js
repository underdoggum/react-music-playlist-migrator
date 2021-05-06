import React from 'react'


//change to depend on state of whether the user has pushed the button, spotify has completed migration
const APIPromiseFulfilled = true;
const APIdata = [
    { song: "Life is a Highway", artist: "Lenny Kkravitz" },
    { song: "What's Up", artist: "Bob Dylan" },
    { song: "Back in Black", artist: "Butthole Surfers" },
    { song: "Blue Suede Shoes", artist: "Blistem of a Frown" },
]
const statusMessage = () => {
    if (APIPromiseFulfilled) {
        return APIdata.map(value => {
            return(<li>{value.song}: {value.artist}</li>)
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
