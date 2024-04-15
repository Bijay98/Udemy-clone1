import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import webdev from '../../assets/webdev.jpg'
import programming from '../../assets/programming.png'
import design from '../../assets/design.png';
import datascience from '../../assets/datascience.jpg'
const Category = () => {
    return (
        <div>
            <div className='container-fluid mt-5'>
                <h1>Categories</h1>
                <div className='d-flex justify-content-between'>
                    <Card style={{ width: '18rem', textAlign: "center" }}>
                        <Card.Img variant="top" src={webdev} />
                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>

                            <Button variant="success">Go</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', textAlign: "center" }}>
                        <Card.Img variant="top" src={programming} />
                        <Card.Body>
                            <Card.Title>Programming Language</Card.Title>

                            <Button variant="success">Go </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', textAlign: "center" }}>
                        <Card.Img variant="top" src={design} />
                        <Card.Body>
                            <Card.Title>UI/UX Design</Card.Title>

                            <Button variant="success">Go </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', textAlign: "center" }}>
                        <Card.Img variant="top" src={datascience} />
                        <Card.Body>
                            <Card.Title>Data Science</Card.Title>

                            <Button variant="success">Go </Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Category
