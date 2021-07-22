import {React} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/HomePage.css';

function Artists(props) {

  return (
    <main>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/artists/uma-marcelo.jpeg"
              alt="Uma Maheshwar Reddy"
            />
            <Carousel.Caption>
              <h3>Uma Maheshwar Reddy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/artists/vinayak1.jpeg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Vinayak Shetty</h3>
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
          <p className="right-aligned"> Vinayak Shetty started training in Kyokushin Karate in ‘97.He received his 1st Dan (degree) Black belt in 2000 and in 2006, after nearly ten years of training in India, he had an opportunity to visit and train in Japan.
          <br/>
          <br/>
          In 2007, he had the chance to participate in the International Instructors Camp in Fukushima, where he graded successfully to second Dan.
          he has had considerable experience in Karate with a strong focus on karate fundamentals. He has completed the ‘uchi deshi ‘ or live in student camp with Shihan Judd Reid three times in Thailand (2016,17,18). It is a unique camp run by Judd Reid who himself had lived in Japan as a personal student of the founder of Kyokushin Karate - Mas Oyama. The camps are an immersive experience where one can truly breathe karate, training intensely three times a day in the lap of nature starting with 6 am hill sprints to finishing the day with meditation as the sun sets on the beach. In 2017 Vinayak graded to third Dan passing a rigorous grading test put forth by Shihan Judd Reid and was also awarded the same by great master Daigo Ohishi chairman of So Kyokushin and Shivaji Ganguly shihan.
          <br/>
          <br/>
          He wishes to continue his training and teaching which he is passionate about, and work towards developing a high standard of Kyokushin karate with emphasis on karate fundamentals. deep emphasis on physical conditioning in Kyokushin specifically develops inner strength and ultimate union of mind, body and spirit, which is the essence of Zen. <br/> <br/>
          <br/>
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

export default Artists
