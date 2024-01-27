import Link from 'next/link'
import React from 'react'
import { Container, Card, Button, Row, Col} from "react-bootstrap"

const Footer = () => {
  return (
    <>
    <footer>
      
    <Container fluid className='p-0'>
    
      <div class="card text-bg-dark rounded-0">
      <img src="./assets/children_4.jpeg" alt='children' style={{height: "800px", objectFit: "cover", opacity: "0.10"}} />
      <div class="card-img-overlay">
        <Container>
        <Row className='text-end pt-4'>
                  <Col xs={6} lg={3}>
                  <h3 className='fw-bold'>
                    Join Us in Making a Difference. Sign Up
                    For Our Newsletter.
                    <Button variant='danger' className='fw-bold px-3 w-100 mt-5'>Subscribe</Button>
                  </h3>
                  </Col>
                  <Col xs={6} lg={3}>
                  <h5 className='fw-bold pb-4'>
                    Non Profit
                  </h5>
                  <p>Save the children</p>
                  <p>Educate a child</p>
                  <p>Adopt a child</p>
                  <p> Feed a child</p>
                  
                  </Col>
                  <Col xs={6} lg={3}>
                  <h5 className='pb-3 fw-bold'>
                    Links
                  </h5>
                 <div className='d-flex flex-column'>
                 <Link href="#">About</Link><br/>
                  <Link href="#">Donate</Link><br/>
                  <Link href="#">Our work</Link><br/>
                  <Link href="#">Our Community</Link>
                 </div>
                  </Col>
                  <Col xs={6} lg={3}>
                  <h5 className='fw-bold pb-3'>
                    Contact Us
                  </h5>
                  <p >
                    9876 St Vincent Street,<br />Glasgow, DC0
                  </p>
                  </Col>

                </Row>
        </Container>
      </div>
    </div>
    </Container>
    </footer>
    </>
  )
}

export default Footer