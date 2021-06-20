import {React, useState } from 'react';
import '../css/Policy.css';

function PrivacyPolicy(props) {

  return (
    <main>
      <div class="rowcontainersansflex">
       <div class="header-center">
         <h1 class="text-center"> Frequently Asked Questions (FAQ's)</h1>
       </div>
       <div class="textcenter">
        <p>
          Following are the links to most common FAQ's. For any query which is not addressed in the FAQ's please feel free to email us at umamaheshwar@stalksnspice.com
          <br/>
          <br/>
          <strong>How do I contact you?</strong>
          <br/>
          Please visit the <a class="standout" href="enquiry"> enquiry </a> page.
          <br/>
          <br/>
          <strong>What is the  schedule?</strong>
          <br/>
          Please visit the <a class="standout" href="schedule"> schedule </a> page for more information
          <br/>
          <br/>
          <strong>Are there any guidelines to be followed?</strong>
          <br/>
          Yes, we expect the members to be respectful of the space and each other. Please visit the <a class="standout" href="gym-rules"> gym rules </a> page for more information
          <br/>
          <br/>
         </p>
       </div>
       <div class="thumbnail center well well-sm text-center">
        <a class="btn btn-large btn-primary" href="index">Return Home</a>
        <p>
          <hr class="hr-large"/>
        </p>
       </div>
     </div>
   </main>
  );
}

export default PrivacyPolicy
