import {React } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/HomePage.css';

function HomePage(props) {

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
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://assets.fluviumwear.com/cover-photos/fluvium-paladins.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <h1 className="index-header"> THE MARTIAL ARTS WAY OF LIFE </h1>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <p> The Dojo has been conceived to facilitate and enable collaboration among martial artists. <br/> <br/>
          The founders Uma Maheshwar Reddy & Vinayak Shetty having about 9 years of experience in Jiu Jitsu & 20 years of experience in Kyokushin respctively
          bring their vast experience to you not only via techniques, but also by instilling qualities such as honor, loyalty, etc. all of which are paramount as a martial artist. <br/> <br/>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <p className="right-aligned"> We've designed and built The Dojo with the post pandemic view of life. <br/> <br/>
          We acknowledge the fact that things are no longer the same and the post pandemic outlook neccessitates certain measures. Keeping this in mind The Dojo
          provides high standards of health, safety, and cleanliness. <br/> <br/>
          We've provided a seperate section to train, lounge & shower. With a seperate bathroom for both men and women and a full fledged shower and changeroom
          we hope to provide a comfortable and clean experience for the users. <br/> <br/>
          </p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <h1 className="index-header-right"> THE DOJO STANDARD </h1>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <h1 className="index-header"> THEDOJO-AS-A-SERVICE </h1>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <p> First of it's kind, we are opening up The Dojo for passionate martial artists who have their own set of students/followers to use the space for a fixed cost. <br/> <br/>
          By doing so we hope to provide a platform for those who might have a great deal of proficiency and experience but without the resources to spread their acknowledge which would
          otherwise have been difficult to do so<br/> <br/>
          By using The Dojo, martial artists can make use of the world class facilities to provide a more complete and fulfilling martial arts experience for their students.
          </p>
        </div>
      </div>
    </main>
  );
}

export default HomePage
