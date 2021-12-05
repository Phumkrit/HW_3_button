import React from "react";

const Sidebar = () =>{
    const [fullname,setFullname] = React.useState('John')
    const [isShow,setIsShow] = React.useState(true)
    const changeName = () =>{
        //fullname ="Marry"
        setFullname("Marry")
        setIsShow(false)
    }
    React.useEffect(() => {
        console.log("sidebar useEffect")
        //work every times UI and component render!

    
    })
    React.useEffect(() => {
        console.log("sidebar useEffect one time only")
        //work once
    })
    React.useEffect(()=> {
        console.log("sidebar useEffect fullname")
        //workonce render fullname and when fullname change
    },[fullname])

    return (
        <div>
            <p> Hello {fullname} {

                isShow ? <p>Hello</p> : <p>World</p>

            }</p>
            <button onClick={changeName}>CHANGE NAME</button>
        </div>
    )
    
}
export default Sidebar