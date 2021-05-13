import React from 'react'
import '../App.css'
import PlaylistRight from './PlaylistRight'

const HeaderRight = props => {
    return (
        <div className='HeaderRightStyle'>
            <h2>Spotify</h2>
            <hr />
            <PlaylistRight />
        </div>
    )
}

export default HeaderRight
