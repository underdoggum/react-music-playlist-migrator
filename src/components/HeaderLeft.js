import React from 'react'
import PlaylistLeft from './PlaylistLeft'
import '../App.css'

const HeaderLeft = props => {
    return (
        <div className='HeaderLeftStyle'>
            <h2>YouTube Music</h2>
            <hr />
            <PlaylistLeft />
        </div>
    )
}

export default HeaderLeft
