import ListGroup from 'react-bootstrap/ListGroup';
export default function Resume() {
    return (
        <div className='row justify-content-center text-center mt-3'>
            <div className='col-10 row justify-content-around mt-3 '>
                <div className='col-5 mt-3 '>
                <h3 className='mt-3'>Front-end</h3>
                <ListGroup className='mt-3'>
                    <ListGroup.Item variant="light">Html</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">Css</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">JavaScript</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">Jquery</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">Responsive Design</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">React</ListGroup.Item>
                </ListGroup>
                <ListGroup className='mb-3'>
                    <ListGroup.Item variant="light">Booststrap</ListGroup.Item>
                </ListGroup>
                </div>
                <div className=' col-5 mt-3'>
                <h3 className='mt-3'>Back-end</h3>
                <ListGroup className='mt-3'>
                    <ListGroup.Item variant="light">Apis</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">Node </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">MySQL, Squelize </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">MongoDB, Mongoose </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">Rest </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroup.Item variant="light">GraphQl </ListGroup.Item>
                </ListGroup>
                <ListGroup className='mb-3'>
                    <ListGroup.Item variant="light">Light</ListGroup.Item>
                </ListGroup>
                </div>
            </div>

        </div>
        
    );
  }