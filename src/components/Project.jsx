import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styke/main.css';
import { FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

// We use JSX curly braces to evaluate the style object on the JSX tag
function Section(data) {
  const handleMouseEnter = (event) => {
    event.target.classList.add("blur");
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove("blur");
  };
  
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="mb-3 ">
          <div className="imagen" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card.Img src={data.projectList[idx].foto} alt={data.title}/>
                  <Card.ImgOverlay>
                    <Card.Text className='texto'>
                    <Card.Title className='p-3 mt-3'>{data.projectList[idx].title}</Card.Title>
                    <a href={data.projectList[idx].repo} target="_blank" rel="noopener noreferrer" className="text-white mr-3 col-3 p-3">
                      <FaGithub  size={40}/> 
                    </a>
                    <a href={data.projectList[idx].deploy} target="_blank" rel="noopener noreferrer" className="text-white mr-3 col-3 p-3">
                      <FaExternalLinkAlt size={35}/> 
                    </a>
                    </Card.Text>
              </Card.ImgOverlay>
          </div>    
        </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Section;
