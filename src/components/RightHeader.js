import React from 'react'
import '../App.css'

const RightHeader = () => {
    return (
        <div className='RightHeadeStyle'>
            <h2>Spotify</h2> <br/>
            <button onClick={() => {alert('Clicked!')}}>Click me</button>
        </div>
    )
}

export default RightHeader
