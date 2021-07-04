import {React } from 'react';
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
                We thank you for contacting us. We are currently experiencing higher than usual volume and
                aim to respond to you within 3 business days
                <br/>
                While you await our reply, please visit our
                <a href="faq"> FAQs </a>
                page & browse through the section to find support for any concern or queries you might have.
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
