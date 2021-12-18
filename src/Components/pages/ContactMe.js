import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { IoIosMegaphone,IoMdHappy } from "react-icons/io";

const ContactMe = () => {
    return (
        <div className="container ">
           <div className="row">
               <div className="col-md-12 mt-4">
               <Card>
  <Card.Header>Contact US</Card.Header>
  <Card.Body>
    <Card.Title>Phumkrit Supkvanich</Card.Title>
    <Card.Text>
      You can call me "Poom" that is my nickname. Have a nice Day!! <IoMdHappy/>
      <li className="mt-3">I wish I Could work about Data Sci or Data Mineing as soon as i have graduate </li>
      <li className="mt-3">I love to sleep and hang out with my friends for my freetime </li>
      <li className="mt-3">Aiming to br rich soon!</li>
      <p className="mt-3">MY GITHUB</p>
    </Card.Text>
    <Button variant="dark" href='https://github.com/Phumkrit' >Contect ME <IoIosMegaphone/></Button>
    <p className="mt-3"> Contect me : Su.phumkrit_st@tni.ac.th</p>
  </Card.Body>
</Card>
               </div>
           </div>
        </div>
    )
}

export default ContactMe
