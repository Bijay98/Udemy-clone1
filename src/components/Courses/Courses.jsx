import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mern from '../../assets/MERN.jpg'
import php from '../../assets/PHP.jpg'
import java from '../../assets/JAVA.png'
import dataScience from  '../../assets/datascience.jpg'
import hacking from '../../assets/Hacking.jpg'
import design from '../../assets/design.png'

const Courses = () => {
  return (
    
      <div className='Container-fluid mt-5'>
       <h1>Courses</h1>
       <div className='d-flex justify-content-between flex-wrap'>
                <Card style={{ width: '17rem',textAlign:"center"}}>
                    <Card.Img variant="top" src={mern} />
                    <Card.Body>
                        <Card.Title>mern stack Development</Card.Title>
                         <p>$20</p>
                        <Button variant="success">Go</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem' ,textAlign:"center"}}>
                    <Card.Img variant="top" src={php} />
                    <Card.Body>
                        <Card.Title>Web Development with php</Card.Title>
                        <p>$20</p>
                        <Button variant="success">Go </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem',textAlign:"center" }}>
                    <Card.Img variant="top" src={java} />
                    <Card.Body>
                        <Card.Title>Full stack Java Developement</Card.Title>
                        <p>$20</p>
                        <Button variant="success">Go </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem',textAlign:"center" }}>
                    <Card.Img variant="top" src={dataScience} />
                    <Card.Body>
                        <Card.Title>Data Science</Card.Title>
                        <p>$20</p>
                        <Button variant="success">Go </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem',textAlign:"center" }}>
                    <Card.Img variant="top" src={hacking} />
                    <Card.Body>
                        <Card.Title>Ethical Hacking</Card.Title>
                        <p>$20</p>
                        <Button variant="success">Go </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem',textAlign:"center",marginTop:"25px" }}>
                    <Card.Img variant="top" src={design} />
                    <Card.Body>
                        <Card.Title>UX/UI design</Card.Title>
                        <p>$20</p>
                        <Button variant="success">Go </Button>
                    </Card.Body>
                </Card>
            </div>
    </div>
    
  )
}

export default Courses
