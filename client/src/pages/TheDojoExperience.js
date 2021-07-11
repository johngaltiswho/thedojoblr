import {React} from 'react';
import {Carousel, Image }from 'react-bootstrap';
import '../css/TheDojoExperience.css';

function TheDojoExperience(props) {

  return (
    <main>
      <div className="full-width">
        <Image src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/carousel/rendering1.jpeg" fluid />
      </div>
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h1 className="index-header-left"> THE DOJO EXPERIENCE </h1>
          <p className="justify">
          At THE DOJO we aim to create an environment combining the tradition that Japanese martial arts is steeped in, with the advancement in modern functional training to deliver a platform that will enable transformation. The DOJO is a space where you can walk onto the tatami and transcend the boundaries and stifling limitations of your regular daily routine.
          <br/>
          <br/>
          Martial arts at its essence is a deeply spiritual pursuit.  To quote the legendary master and founder of Kyokushin Karate, Sosai Mas Oyama, <i>“Following the Martial Way is like scaling a cliff – continue upwards without rest. It demands absolute and unfaltering devotion to the task at hand.”</i>
          <br/>
          <br/>
          Training begins within the physical realm ofcourse , the tangible physical transformation where you chisel your physique and physical conditioning to its finest state with rigorous training. This involves pushing the physical and mental limits and expanding one’s comfort zone. In doing so you are learning to connect with your inner spirit. Supported with simple meditation techniques and ikken or Ki exercies (life force / prana) gradually you are aware of higher states of consciousness and harmony between individual and universal energy, felt in every technique.  A true integration of mind, body and spirit.
          <br/>
          <br/>
          We all experience the drudgery and stress that comes with the demands of life, some cope easily with facing adversity and others struggle.  Training provides the window of escape, the reset, the refreshing utopian state and ultimately develops the never give up attitude. Here pretensions are dropped and you can strengthen your heart in the sense of your spirit.  Japanese martial art training will help you to become strong and develop into a kind person of good character. This is the soul of the practice. You give the best of yourself to make all your dreams come true.
          <br/>
          <br/>
          Our instructors have travelled and trained with the best instructors around the world, competing in big international tournaments and are committed to bringing that level of training home. We strive to teach the art in a way just as you would experience it in Japan or any other world class dojo. Lastly, if an art form is to survive the generations of time, there must be a transmission of knowledge and experience from one generation to the next. It is our humble pursuit that THE DOJO serves as many a battle ground and be your sacred space.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h1 className="index-header"> UNLIMITED CLASSES </h1>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p>
            Once you enroll yourself into The Dojo Tribe, you are automatically eligible to attend all classes. With multiple classes available per day, you can ensure that you get to catch at least
            1 class per day.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p className="right-aligned"> The training area is equipped with 40mm Thick Padded mats made from Japanese Synthetic Rubber that can absorb and cushion impact from throws, falls, etc.
          to provide a pleasant and pain free training experience. With the walls padded with 30mm padded mats, you are even protected against accidental collisions while training.
           <br/> <br/>
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h1 className="index-header-right"> WORLD CLASS TRAINING AREA </h1>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p className="right-aligned"> Seperate bathrooms are provided for male & female. A spacious shower for those who have to travel to work to facilitate training in the morning sessions.
          The mats are cleaned twice each day after intense training. <br/> <br/>
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h1 className="index-header-right"> CLEAN & SAFE FACILITIES </h1>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h1 className="index-header-right"> LEISURE SPACE FOR MEETUPS </h1>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p className="right-aligned"> High table, pantry, etc. are put into place to provide the perfect after training vibes. <br/> <br/>
          </p>
        </div>
      </div>


    </main>
  );
}

export default TheDojoExperience
