import React from 'react'
import Button from '../styles/button/Button'
import Title from '../styles/title/Title'

const Header = () => { 
    let companyName = "TNI"
    const showMessage = () => {
        return companyName + ".com"
    }

    const isLogin = true;
    const showME = () => {
        alert('Hello react')
    }

    const product = [
        {id:1,name:'coke',price:10},
        {id:2,name:'pespi',price:15},
    ]
    return (
        <div>
            <Title>Project React</Title>
            <h1>Hello {showMessage()}</h1>
            
            <hr/>
            {
                isLogin && (
                <div>
                <p> Welcome </p>
                <p> Student </p>
                </div>
                )
            }
            <button onClick={showME}>Click me!</button>
            <Button onClick={showME}>
                Click me!
                </Button>
                <ul>
                {
                product.map( (product,index) =>{
                    return <li key= {product.id} > {product.name} - {product.price} </li>
                })
                }
            </ul>
        </div>
    )
}

export default Header
