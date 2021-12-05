import React from 'react'
import {logo, title} from '../styles/styles'
import useHover from './hooks/useHover'

const Logo = () => { 
    const [hover,mouseOver,mouseOut] = useHover ()
    const logoImage = {
        url: './logo192.png'
    }
    return (
        <div>
            <h3 style={title}>Logo</h3>
          { /* <img style={logo} src={logoImages.url} width="100" alt="logo"></img> */ }

            <img onMouseOver={mouseOver} onMouseOut={mouseOut} style={logo} src={logoImage.url} width="100" alt="logo"/>
            {
                hover ? <h3>Logo</h3> : null
            }
        </div>
    )
}

export default Logo
