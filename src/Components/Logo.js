import React from 'react'

const Logo = () => { 
    const logoImages = {
        url: './logo192.png'
    }
    return (
        <div>
            <img src={logoImages.url} width="100" alt="logo"></img>
        </div>
    )
}

export default Logo
