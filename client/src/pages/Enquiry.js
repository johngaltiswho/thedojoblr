import {React, useState } from 'react';
import axios from 'axios'
import '../css/Enquiry.css';
import { useHistory } from 'react-router-dom';

function Enquiry(props) {
  const [enquiry, setEnquiry] = useState({name: "",email: "",phone:"",sub:"",msg:""});
  const history = useHistory();

  const handleSetEnquiry = e => {
    const { name, value } = e.target;
    setEnquiry(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitEnquiry = (e) => {
    e.preventDefault();
    axios.post('/enquiry', {
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone,
      sub: enquiry.sub,
      msg: enquiry.msg,
      tenantId: "thedojo"
    })
    .then(res => {
      setEnquiry(prevState => ({
          ...prevState,
          name: "",
          email: "",
          phone: "",
          sub: "",
          msg: "",
      }));
      history.push(`/thank-you-for-contacting-us`);
    })
    .catch(err => console.log(err));
  };

  return (
    <main>
      <div className="contact-form">
      <div className="fixing-newsletter">
        <div className="thumbnail center well well-sm text-center">
          <h1 className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> CONTACT US</h1>
          <hr className="hr-large d-none d-md-block"/>
          <div className="rowcontainer">
           <div className="col-md-8 col-xl-8 col-sm-12 col-xs-12">
             <div className="row">
               <div className="col-md-4">
                <div className="md-form">
                  <input  className="form-control" name="name" value={enquiry.name} onChange={handleSetEnquiry}/>
                    <label for="name">Your Name</label>
                    <div className="invalid-feedback">Enter Your Name!</div>
                 </div>
               </div>
               <div className="col-md-4">
                <div className="md-form">
                  <input  className="form-control" name="email" value={enquiry.email} onChange={handleSetEnquiry}/>
                  <label for="email">Your Email</label>
                  <div className="invalid-feedback">Please Provide a Valid Email ID!</div>
                </div>
               </div>
               <div className="col-md-4">
                <div className="md-form">
                  <input  className="form-control" name="phone" value={enquiry.phone} onChange={handleSetEnquiry}/>
                  <label for="phone">Your Phone Number</label>
                  <div className="invalid-feedback">Please Enter a Valid Phone Number</div>
                </div>
               </div>
             </div>
             <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <input  className="form-control" name="sub" value={enquiry.sub} onChange={handleSetEnquiry}/>
                  <label for="subject">Subject</label>
                  <div className="invalid-feedback">Please enter subject!</div>
                 </div>
               </div>
             </div>
             <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea  className="form-control" name="msg" value={enquiry.msg} onChange={handleSetEnquiry}/>
                  <label for="message">Your Message</label>
                  <div className="invalid-feedback">Please enter your message!</div>
                </div>
              </div>
           </div>
            <input className = "btn btn-large btn-primary" type='submit' value='SUBMIT' name="Submit" onClick={submitEnquiry} />
           </div>
           <div className="col-md-4 col-xl-4 col-sm-12 col-xs-12 contactinfo">
            <p>
              <strong>Customer Service Enquires:</strong>
              <br/>
              Phone No: 9972508604
              <br/>
              Email ID: hello@thedojoblr.com
              <br/>
              <strong>Mailing Address:</strong>
              <br/>
              #403, 3rd Floor, 22nd Cross, 2nd Sector
              <br/>
              HSR Layout, Bangalore, India, 560102
              <br/>
              <strong>Business Hours:</strong>
              <br/>
              Monday-Friday from 9:00AM-6:00PM (IST)
            </p>
           </div>
         </div>
       </div>
     </div>
     <hr className="hr-large d-none d-md-block"/>
   </div>
</main>
  );
}

export default Enquiry
