import React from 'react'
import PlaylistLeft from './PlaylistLeft'
import '../App.css'

const HeaderLeft = props => {
    return (
        <div className='HeaderLeftStyle'>
            <h2>YouTube Music</h2> <br/>
            <button onClick={() => {alert(`Why'd you choose ${props.selectedPlaylist}`)}}>Click me</button>
            <PlaylistLeft />
        </div>
    )
}

export default HeaderLeft
