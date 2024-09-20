import Carousel from 'react-bootstrap/Carousel';
import {heroData} from  '../utils/heroData'

const Hero = () => {
  return (
    <section id='home' className='hero-block'>
        <Carousel>
            {heroData.map((data) => (
                <Carousel.Item key={data.id}>
                    <img src={data.image} alt={data.id} className='d-block w-100' />
                    <Carousel.Caption>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <a  className='btn btn-primary' href={data.link}>Learn More <i className='fas fa-chevron-right'></i></a>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    </section>
  )
}
export default Hero