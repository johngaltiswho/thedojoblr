import {React, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Card, CardDeck, ListGroup, ListGroupItem, Button, Modal} from 'react-bootstrap';
import '../css/Membership.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Membership () {
  const [show, setShow] = useState(false);
  const [membershipAmount, setMembershipAmount] = useState(0)
  const [membershipType, setMembershipType] = useState("")
  const [profile, setProfile] = useState({name: "",email: "",phone:"",bio:""});
  const history = useHistory();
  const [amount, setAmount] = useState(0)
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  useEffect(() => {
    // console.log(user)
    if(isAuthenticated) {
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
    }
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

  const toggleMembership = (e) => {
    console.log(e.target.value === "499")
    if(e.target.value === "499") {
      setMembershipType("Ronin Pass")
    } else if (e.target.value === "4999") {
      setMembershipType("Samurai Pass")
    } else if (e.target.value === "39999") {
      setMembershipType("Zen Pass")
    }
    console.log(membershipType)

    setMembershipAmount(e.target.value)
    setShow(true);
  }

  const submitOrder = (event) => {
    setShow(false);
    event.preventDefault();
    axios.post('/razorpay', {
      amount: membershipAmount,
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
          description: membershipType,
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

  const handleClose = () => {
    setShow(false)
  }

  return (
    <main>
      <Modal show={show} onHide={handleClose} centered={1}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> TELL US ABOUT YOURSELF </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rowcontainer">
           <div className="col-md-12 col-xl-12 col-sm-12 col-xs-12">
             <div className="row">
               <div className="col-md-12">
                <div className="md-form">
                  <input  className="form-control" name="name" value={profile.name} onChange={handleSetProfile}/>
                    <label htmlFor="name">Your Name</label>
                 </div>
               </div>
               <div className="col-md-12">
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
         <hr className="hr-large"/>
         <input className = "btn btn-large btn-primary" type='submit' value={"Checkout " + membershipType} name="Submit" onClick={submitOrder} />
       </Modal.Body>
      </Modal>
      <div className="contact-form">
        <div className="fixing-newsletter">
          <div className="thumbnail center well well-sm text-center">
            <h1 className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> FLEXIBLE PLANS </h1>
            <p className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> Choose a plan that works best for you </p>
            <hr className="hr-large d-none d-md-block"/>
            <CardDeck>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title>Ronin (Day) Pass <br/> <br/><strong><h3> Rs.499 </h3> </strong>
                  </Card.Title>
                  <Card.Text>
                    It's easy to stand with the crowd. It takes courage to stand alone.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Single day pass</ListGroupItem>
                  <ListGroupItem>Access to all the classes throughout the day</ListGroupItem>
                  <ListGroupItem>No signup or hidden fees</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button variant="primary" size="lg" onClick={!isAuthenticated ? () => loginWithRedirect({}) : (e)=>toggleMembership(e)} value={499} active>
                    Enroll
                  </Button>
                </Card.Body>
              </Card>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title> Samurai (Month) Pass <br/> <br/><strong><h3> Rs.4999 </h3> </strong>
                  </Card.Title>
                  <Card.Text>
                    Only those who attempt the absurd can acheive the impossible!
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Month to month agreement</ListGroupItem>
                  <ListGroupItem>Unlimited training access to all classes</ListGroupItem>
                  <ListGroupItem>5% discount on all Fluvium Merchandize</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button variant="primary" size="lg" onClick={!isAuthenticated ? () => loginWithRedirect({}) : (e)=>toggleMembership(e)} value={4999} active>
                    Enroll
                  </Button>
                </Card.Body>
              </Card>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title> Zen (Annual) Pass <br/> <br/><strong><h3> Rs.39999 </h3> </strong>
                  </Card.Title>
                  <Card.Text>
                    Cowards never start. The weak never finish. Winners never quit.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Annual agreement</ListGroupItem>
                  <ListGroupItem>Unlimited training access to all classes</ListGroupItem>
                  <ListGroupItem>10% discount on all Fluvium Merchandize</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button variant="primary" size="lg" onClick={!isAuthenticated ? () => loginWithRedirect({}) : (e)=>toggleMembership(e)} value={39999} active>
                    Enroll
                  </Button>
                </Card.Body>
              </Card>
          </CardDeck>
          </div>
        </div>
       <hr className="hr-large d-none d-md-block"/>
     </div>
    </main>
  );
}

export default Membership
