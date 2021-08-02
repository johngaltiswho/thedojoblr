import {React } from 'react';
import '../css/Policy.css';

function RefundPolicy(props) {

  return (
      <main>
      <div className="rowcontainersansflex">
          <div className="header-center">
              <h1 className="text-center"> REFUND POLICY </h1>
          </div>
          <div className="textcenter">
            <p>
              <strong>NO REFUNDS</strong>
              <br/>
              All purchases made towards memberships are final and non-refundable. Once fitness centre membership is purchased online on our platform, there will be no refund.
              Thus, the buyer is advised to make an informed decision while making a purchase on our platform.
              <br/>
              <br/>
              <strong>NON TRANSFERABLE</strong>
              <br/>
              Membership once purchased is not transferable!
              <br/>
              <br/>

              <strong>MEMBERSHIP FREEZING</strong>
              <br/>
              Your membership can be frozen only under the following conditions:-
                <ul>
                  <li> You're medically unable to take part in the classes at The Dojo, due to an injury or sickness. The Dojo might require a signed letter from the doctor
                  or other some actionable evidence before granting request for a medical freeze.</li>
                  <li>If you had to travel out of city either for work or for pleasure. The Dojo might need documents such as flight tickets/hotel reservation confirmation for the same.</li>
                </ul>
                All requests for membership freeze must be made at least 5 days prior to the intended start date to be able to utlize this benefit.
              <br/>
              <br/>
            </p>
          </div>
          <hr className="hr-large"/>
      </div>
    </main>
  );
}

export default RefundPolicy
