import {React } from 'react';
import '../css/Enquiry.css';

function OrderConfirmation(props) {

  return (
    <main>
      <div class="contact-form">
        <div class="rowcontainer">
          <div class="fixing-newsletter">
            <div class="thumbnail center well well-sm text-center">
              <h2 class="space">CONGRATULATIONS</h2>
              <p>
                Your order is confirmed. We welcome you to The Dojo Community and are excited to facilitate & be part of your growth as a martial artist.
                <br/>
                You can always reach out to us at hello@thedojoblr.com for any queries or concern regarding your enrollment.
                See you on the mats.
                <br/>
                Oss!
              </p>
              <a class="btn btn-large btn-primary" href="/profile">Profile & Orders</a>
              <hr class="hr-large d-none d-md-block"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OrderConfirmation
