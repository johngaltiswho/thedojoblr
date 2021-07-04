import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import '../css/Footer.css';


function Footer(props) {
  const [email, setEmail] = useState();
  const history = useHistory();

  const submitNewsletter = (e) => {
    e.preventDefault();
    axios.post('/newsletter', {
      email: email,
    })
    .then(res => {
      setEmail("")
      history.push(`/thank-you-for-signing-up`);
    })
    .catch(err => console.log(err));
  };

  useEffect(() => {
  });

  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-6 grid-item site-footer">
            <ul className="no-bullets">
              <li className="space">
                <Link to="/privacy-policy"><h5> Privacy Policy </h5></Link>
              </li>
              <li className="space">
                <Link to="/enquiry"><h5> Enquiry </h5></Link>
              </li>
              <li className="space">
                <Link to="/membership"><h5> Membership </h5></Link>
              </li>
              <li className="space">
                <Link to="/schedule"><h5> Schedule </h5></Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-6 grid-item site-footer">
            <ul className="no-bullets">
              <li className="space">
                <Link to="/gym-rules"><h5> Gym Rules </h5></Link>
              </li>
              <li className="space">
                <Link to="/frequently-asked-Questions"><h5> FAQ's </h5></Link>
              </li>
              <li className="space">
                <Link to="/enquiry"><h5> Enquiry </h5></Link>
              </li>
              <li className="space">
                <Link to="/enquiry"><h5> Enquiry </h5></Link>
              </li>
            </ul>
          </div>
          <div className="fixing-newsletter col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="thumbnail center well well-sm text-center">
              <h2 className="space"> NEWSLETTER </h2>
              <div className="md-form">
                <label>
                  Subscribe to our newsletter and to stay upto date on the The Dojos Events.
                  <input className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <div className="invalid-feedback">Please provide a valid Email Id.</div>
              </div>
              <input className = "btn btn-large btn-primary" type='submit' value='SUBMIT' name="Submit" onClick={submitNewsletter} />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 grid-item site-footer space-top">
            <div className="footer-header footer-header-center">
              <div className="oneline-footer">
                <ul className="no-bullets flex-row">
                  <li><img src="https://website-essentials.s3.ap-south-1.amazonaws.com/visa-white-background.png" data-src="https://website-essentials.s3.ap-south-1.amazonaws.com/visa-white-background.png" alt="Visa" className="payment"/></li>
                  <li><img src="https://website-essentials.s3.ap-south-1.amazonaws.com/paypal-white-background.png" data-src="https://website-essentials.s3.ap-south-1.amazonaws.com/paypal-white-background.png" alt="Paypal" className="payment"/></li>
                  <li><img src="https://website-essentials.s3.ap-south-1.amazonaws.com/maestro-white-background.png" data-src="https://website-essentials.s3.ap-south-1.amazonaws.com/maestro-white-background.png" alt="Maestro" className="payment"/></li>
                </ul>
              </div>
              <p className="footer-header">© The Dojo. All Rights Reserved.</p>
              <div className="oneline-footer">
                <ul className="no-bullets flex-row">
                  <li><a href="https://www.instagram.com/thedojoblr/" title="Instagram"><img src="https://website-essentials.s3.ap-south-1.amazonaws.com/instagram-white-background.png" data-src="https://website-essentials.s3.ap-south-1.amazonaws.com/instagram-white-background.png" alt="Instagram" title="Instagram" className="social"/></a></li>
                  <li><a href="https://www.youtube.com/channel/UCMbYkeCCQ5VvQN54maOvVKg" title="Youtube"><img src="https://assets.fluviumwear.com/youtube.png" data-src="https://assets.fluviumwear.com/youtube.png" alt="Youtube" title="Youtube" className="social"/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


export default Footer

// <footer>
//   <div classNameName="bottom-footer">
//     <div className="col-md-4">
//       <a id="footer-home" href="/">
//         <img src="https://s3.ap-south-1.amazonaws.com/stalksnspice.com/logos/sns-logo-small-no-background-100px.png" alt="Stalks N Spice logo"/>
//       </a>
//     </div>
//     <div className="footer-menu">
//       <div className="menu-block">
//         <h5> Company </h5>
//         <ul>
//           <li> <a href="/">About Us</a></li>
//           <li> <a href="/">About Us</a></li>
//           <li> <a href="/">About Us</a></li>
//         </ul>
//       </div>
//       <div className="menu-block">
//         <h5> Company </h5>
//         <ul>
//           <li> <a href="/">About Us</a></li>
//           <li> <a href="/">About Us</a></li>
//           <li> <a href="/">About Us</a></li>
//         </ul>
//       </div>
//       <div className="menu-block">
//         <h5> Contact Us </h5>
//         <ul>
//           <li> The Dojo </li>
//           <li> Phone: 9972508604 </li>
//           <li> Email: info@thedojoblr.com </li>
//           <li> Address: #403, 3rd Floor, <br/> 22nd Cross, 2nd Sector, HSR Layout, <br/> Bangalore, Karnataka, 560102 </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </footer>
