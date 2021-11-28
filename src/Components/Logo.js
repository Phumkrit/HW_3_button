import React from 'react'
import {logo} from '../styles/styles'

const Logo = () => { 
    const logoImages = {
        url: './logo192.png'
    }
    return (
        <div>
            <img style={logo} src={logoImages.url} width="100" alt="logo"></img>
        </div>
    )
}

export default Logo
