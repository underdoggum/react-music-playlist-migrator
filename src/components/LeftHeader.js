import React from 'react'
import '../App.css'

const LeftHeader = () => {
    return (
        <div className='LeftHeaderStyle'>
            <h2>YouTube Music</h2> <br/>
            <button onClick={() => {alert('click')}}>Click me</button>
            
        </div>
    )
}

export default LeftHeader
