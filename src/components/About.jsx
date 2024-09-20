import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


import img1 from '../assets/images/img1.jpg'


const About = () => {
    const html = 80;
    const responsive = 95;
    const photoshop = 60;

  return (
    <section id='about' className='block about-block'>
        <Container fluid>
            <div className="title-holder">
                <h2>About Us</h2>
                <div className="subtitle">learn more about us</div>
            </div>
            <Row>
                <Col sm={6}>
                    <Image src={img1} />
                </Col>
                <Col sm={6}>
                <p className='mt-3'>At Travel Smart, we are dedicated to creating personalized, unforgettable travel experiences. With years of expertise in the industry, we specialize in crafting customized vacation packages, booking flights, accommodations, cruises, and organizing group and corporate travel. Whether you're seeking a luxury retreat, a cultural exploration, an adventurous getaway, or a seamless business trip, our team of experienced travel experts ensures every detail is taken care of.</p>
            
            <div className='progress-block'>
              <h4>Reliability</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>Comfortability</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>Visa Guaranteed</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default About