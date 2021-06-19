import {React, useState } from 'react';
import {Carousel, Image }from 'react-bootstrap';
import '../css/TheDojoExperience.css';

function TheDojoExperience(props) {

  return (
    <main>
      <div className="full-width">
        <Image src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/carousel/rendering1.jpeg" fluid />
      </div>
      <div className="container">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h1 className="index-header"> UNLIMITED CLASSES </h1>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p>
            Once you enroll yourself into The Dojo Tribe, you are automatically
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p className="right-aligned"> 40mm Thick Padded mats made from Japanese Synthetic Rubber to absorb impact <br/> <br/>
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h1 className="index-header-right"> WORLD CLASS TRAINING AREA </h1>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h1 className="index-header-right"> WORLD CLASS FACILITIES </h1>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p className="right-aligned"> Over 20 years of experience Vinayak is a dfsfs <br/> <br/>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p className="right-aligned"> Seperate bathroom for females & shower area. <br/> <br/>
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
          <p className="right-aligned"> High table, pantry, etc. to provide the perfect after training vibes. <br/> <br/>
          </p>
        </div>
      </div>


    </main>
  );
}

export default TheDojoExperience
