import {React ,useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImage from "../images/ContactImaage.png"
export default function Contact() {
   const firstFormDetails ={
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
   }
   const[FormDetails,setFormDetails]=useState(firstFormDetails)
   const[Status,setStatus]=useState({})

  return (
    <div className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImage} alt='contact Us'/>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form >
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' 
                                value={FormDetails.firstName} 
                                placeholder='First Name'/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='text' 
                                value={FormDetails.lastName} 
                                placeholder='Last Name'/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='email' 
                                value={FormDetails.email} 
                                placeholder='Email'/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='text' 
                                value={FormDetails.phone} 
                                placeholder='Phone'/>
                            </Col>
                            <Col >
                                <textarea row="6"
                                value={FormDetails.message} 
                                placeholder='Message'/>
                                <button type='submit'><span>Send</span></button>
                            </Col>{
                             Status.message &&
                              <Col>
                                <p>{Status.message}</p>
                              </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
