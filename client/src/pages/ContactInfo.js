import {React, useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Enquiry.css';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function ContactInfo(props) {
  const [profile, setProfile] = useState({name: "",email: "",phone:"",bio:""});
  const history = useHistory();
  const [amount, setAmount] = useState(0)
  const { user } = useAuth0();

  useEffect(() => {
    // console.log(user)
    setAmount(props.location.state.amount)
    console.log(amount)
    axios.get('/user?email=' + user.email)
    .then(res => {
      console.log(res)
      setProfile({
        name: res.data.name || "",
        email: res.data.email || "",
        phone: res.data.phone || "",
        bio: res.data.bio || "",
      })
      loadScript("https://checkout.razorpay.com/v1/checkout.js");
    })
    .catch(err => console.log(err));
  }, []);

  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
  }

  const submitOrder = (event) => {
    event.preventDefault();
    axios.post('/razorpay', {
      amount: amount,
      currency: "INR",
      receipt: "1234",
      name: profile.name,
      email: profile.email,
      orderNumber:"1234"
    })
    .then(res => {
      console.log(res)
      const options = {
          key: "rzp_test_jXR29jYHg3XOmi", // Enter the Key ID generated from the Dashboard
          amount: res.data.amount.toString(),
          currency: "INR",
          name: 'THE DOJO',
          description: "Membership Fees",
          image: "https://s3.ap-south-1.amazonaws.com/stalksnspice.com/sns-logo-small.png",
          order_id: res.data.id,
          handler: async function (response) {
              const data = {
                  orderCreationId: "1234",
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
              };

              const result = await axios.post("/razorpay/confirmation", data);

              alert(result.data.msg);
          },
          prefill: {
              name: profile.name,
              email: profile.email,
              contact: profile.phone,
          },
          notes: {
              address: "The Dojo BLR",
          },
          theme: {
              color: "#ae8f63",
          },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    })
    .catch(err => console.log(err.response));
  }

  const handleSetProfile = e => {
    const { name, value } = e.target;
    setProfile(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitProfile = (e) => {
    e.preventDefault();
    axios.post('/user?email=' + user.email, {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
    })
    .then(res => {
      setProfile(prevState => ({
        ...prevState,
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
      }));
    })
    .catch(err => console.log(err));
  };

  return (
    <main>
      <div className="contact-form">
      <div className="fixing-newsletter">
        <div className="thumbnail center well well-sm text-center">
          <h1 className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> TELL US ABOUT YOURSELF </h1>
          <hr className="hr-large d-none d-md-block"/>
          <div className="rowcontainer">
           <div className="col-md-12 col-xl-12 col-sm-12 col-xs-12">
             <div className="row">
               <div className="col-md-6">
                <div className="md-form">
                  <input  className="form-control" name="name" value={profile.name} onChange={handleSetProfile}/>
                    <label htmlFor="name">Your Name</label>
                 </div>
               </div>
               <div className="col-md-6">
                <div className="md-form">
                  <input  className="form-control" name="phone" value={profile.phone} onChange={handleSetProfile}/>
                  <label htmlFor="phone">Your Phone Number</label>
                </div>
               </div>
             </div>
             <div className="row">
               <div className="col-md-12">
                <div className="md-form">
                  <input  className="form-control" name="email" value={profile.email} onChange={handleSetProfile}/>
                  <label htmlFor="email">Your Email</label>
                </div>
               </div>
             </div>
           </div>
         </div>
         <input className = "btn btn-large btn-primary" type='submit' value='PAY NOW' name="Submit" onClick={submitOrder} />
       </div>
       <hr className="hr-large"/>
     </div>
   </div>
</main>
  );
}

export default ContactInfo
