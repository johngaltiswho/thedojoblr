import {React} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/HomePage.css';

function Instructors(props) {

  return (
    <main>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/carousel/rendering1.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/carousel/rendering2.jpeg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h1 className="index-header"> UMA MAHESHWAR REDDY </h1>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p> Over 8 years of experience in Brazilian Jiujitsu and still actively competing Uma heads will be heading the Jiujitsu classes at The Dojo <br/> <br/>
          Having trained at Marcelo Garcia Academy during this academic live which is considered to be one of the best and toughest rooms in the world, he is looking
          to bring the same intensity, vibes and atmosphere to The Dojo. His main intention is to be a facilitator instead of a teacher or coach which will enable
          him to continue growing along with his students/peers.
          <br/>
          <br/>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p className="right-aligned"> Over 20 years of experience Vinayak is a <br/> <br/>
          <br/>
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h1 className="index-header-right"> VINAYAK SHETTY </h1>
        </div>
      </div>
    </main>
  );
}

export default Instructors
