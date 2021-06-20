import {React, useState } from 'react';
import '../css/Enquiry.css';

function ThankYouContact(props) {

  return (
    <main>
      <div class="contact-form">
        <div class="rowcontainer">
          <div class="fixing-newsletter">
            <div class="thumbnail center well well-sm text-center">
              <h2 class="space">THANK YOU</h2>
              <p>
                We thank you for subscribing to our newsletter. Our goal is to get provide a true & authentic martial arts experience. We hope that with the content
                we put out you are able to take one step closer to your martial arts journey.
              </p>
              <a class="btn btn-large btn-primary" href="/">Return Home</a>
              <hr class="hr-large d-none d-md-block"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ThankYouContact
