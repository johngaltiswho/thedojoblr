import {React } from 'react';
import '../css/Enquiry.css';

function OrderConfirmation(props) {

  return (
    <main>
      <div class="contact-form">
        <div class="rowcontainer">
          <div class="fixing-newsletter">
            <div class="thumbnail center well well-sm text-center">
              <h2 class="space">We're Sorry!</h2>
              <p>
                Your Dojo membership had not been confirmed since there was an issue with the payment gateway. If your account has been debited, please wait for 3-5 days
                for the amount to be credited back in to your account. In case the the amount has still not credited back to your account, please email us at
                hello@thedojoblr.com. We will definitely assist you with the same.
                <br/>
                In case you're not able to make the payment through the payment gateway please reach out to us at hello@thedojoblr.com and we will try to arrange alternate
                methods of payment! Look forward to resolving your issue and seeing you on the mats!
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
