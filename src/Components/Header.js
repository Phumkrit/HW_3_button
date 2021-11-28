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
    const showHW = () => {
        alert('เสร็จแล้ว')
    }
    const keyword = 'correct'

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
            <Button onClick={showME}>
                Click me!
                </Button>
                <Button onClick={showHW} keyword={keyword}>ClickMe</Button>
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
