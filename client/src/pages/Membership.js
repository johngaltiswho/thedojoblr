import {React, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Card, CardDeck, ListGroup, ListGroupItem, Button, Modal, Image} from 'react-bootstrap';
import '../css/Membership.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Membership () {
  const [show, setShow] = useState(false);
  const [membershipAmount, setMembershipAmount] = useState(0)
  const [membershipType, setMembershipType] = useState("")
  const [profile, setProfile] = useState({name: "",email: "",phone:""});
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
    if(e.target.value === "899") {
      setMembershipType("Ronin Pass")
    } else if (e.target.value === "4799") {
      setMembershipType("Samurai Pass")
    } else if (e.target.value === "13999") {
      setMembershipType("Paladin Pass")
    } else if (e.target.value === "49999") {
      setMembershipType("Zen Pass")
    } else if (e.target.value === "1") {
      setMembershipType("Test Pass")
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
      name: profile.name,
      email: profile.email,
    })
    .then(res => {
      console.log(res.data)
      const options = {
        key: "rzp_live_ws6On1bGWL78PH", // Enter the Key ID generated from the Dashboard
        amount: res.data.amount.toString(),
        currency: "INR",
        name: 'THE DOJO',
        description: membershipType,
        image: "https://s3.ap-south-1.amazonaws.com/thedojoblr.com/thedojo-logo-nobg.png",
        order_id: res.data.id,
        handler: async function (response) {
          const data = {
            orderId: res.data.id,
            membership: membershipType,
            phone: profile.phone,
            email: profile.email,
            name: profile.name,
            amount: membershipAmount,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          axios.post("/razorpay/confirmation?email=" + user.email, data)
          .then((result) => {
            history.push('/order-confirmation')
          })
          .catch(err => console.log(err.response));
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

  const rentalSection = (
    <>
    <div className="fixing-newsletter">
      <div className="thumbnail center well well-sm text-center">
        <h1 className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> THE DOJO AS A SERVICE </h1>
        <p className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> Choose a plan that works best for you </p>
        <hr className="hr-large d-none d-md-block"/>
        <CardDeck>
          <Card className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <Card.Body>
              <Card.Title>Hourly Pass - Shared <br/> <br/><strong><h3> Rs.499 </h3> </strong>
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Rent out the space for an hour</ListGroupItem>
              <ListGroupItem>The space will be shared with other athletes/coaches/trainers like yourselves.</ListGroupItem>
              <ListGroupItem>No signup or hidden fees</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Image className="qrcode none" src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/ronin-899.jpeg"/>
            </Card.Body>
          </Card>
          <Card className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <Card.Body>
              <Card.Title>Hourly Pass - Private<br/> <br/><strong><h3> Rs.999 </h3> </strong>
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Rent out the space for an hour</ListGroupItem>
              <ListGroupItem>Have access to the entire space to yourself including all facilities</ListGroupItem>
              <ListGroupItem>No signup or hidden fees</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Image className="qrcode none" src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/ronin-899.jpeg"/>
            </Card.Body>
          </Card>
          <Card className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <Card.Body>
              <Card.Title> Monthly Pass <br/> <br/><strong><h3> Case By Case </h3> </strong>
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Month to month agreement</ListGroupItem>
              <ListGroupItem>Access to the entire space & facilities</ListGroupItem>
              <ListGroupItem>A nominal monthly deposit. </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Image className="qrcode none" src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/samurai-4799.jpeg"/>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
    <div className="rowcontainer">
     <p className="header-center">
        For more detailed pricing information, email us at hello@thedojoblr.com.
     </p>
    </div>
    <hr className="hr-large d-none d-md-block"/>
    </>
  )

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
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 none">
                <Card.Body>
                  <Card.Title> Test Pass <br/> <br/><strong><h3> Rs.1 </h3> </strong>
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
                  <Button className="" variant="primary" size="lg" onClick={!isAuthenticated ? () => loginWithRedirect({}) : (e)=>toggleMembership(e)} value={1} active>
                    Enroll
                  </Button>
                  <Image className="qrcode none" src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/ronin-899.jpeg"/>
                </Card.Body>
              </Card>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title>Ronin (Day) Pass <br/> <br/><strong><h3> Rs.899 </h3> </strong>
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
                  <Button className="" variant="primary" size="lg" onClick={!isAuthenticated ? () => loginWithRedirect({}) : (e)=>toggleMembership(e)} value={899} active>
                    Enroll
                  </Button>
                  <Image className="qrcode none" src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/ronin-899.jpeg"/>
                </Card.Body>
              </Card>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title> Samurai (Month) Pass <br/> <br/><strong><h3> Rs.4799 </h3> </strong>
                  </Card.Title>
                  <Card.Text>
                    Only those who attempt the absurd can acheive the impossible!
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Month to month agreement</ListGroupItem>
                  <ListGroupItem>Unlimited training access to all classes</ListGroupItem>
                  <ListGroupItem>No signup or hidden fees</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button className="" variant="primary" size="lg" onClick={!isAuthenticated ? () => loginWithRedirect({}) : (e)=>toggleMembership(e)} value={4799} active>
                    Enroll
                  </Button>
                  <Image className="qrcode none" src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/samurai-4799.jpeg"/>
                </Card.Body>
              </Card>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title> Paladin (Quarterly) Pass <br/> <br/><strong><h3> Rs.13999 </h3> </strong>
                  </Card.Title>
                  <Card.Text>
                    Cowards never start. The weak never finish. Winners never quit.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Quarterly agreement</ListGroupItem>
                  <ListGroupItem>Unlimited training access to all classes</ListGroupItem>
                  <ListGroupItem>5% discount on Fluvium Merchandize</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button className="" variant="primary" size="lg" onClick={!isAuthenticated ? () => loginWithRedirect({}) : (e)=>toggleMembership(e)} value={13999} active>
                    Enroll
                  </Button>
                  <Image className="qrcode none" src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/paladin-13999.jpeg"/>
                </Card.Body>
              </Card>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title> Zen (Annual) Pass <br/> <br/><strong><h3> Rs.49999 </h3> </strong>
                  </Card.Title>
                  <Card.Text>
                    Black Belt — A white belt that never quit
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Annual agreement</ListGroupItem>
                  <ListGroupItem>Unlimited training access to all classes</ListGroupItem>
                  <ListGroupItem>10% discount on Fluvium Merchandize</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button className="" variant="primary" size="lg" onClick={!isAuthenticated ? () => loginWithRedirect({}) : (e)=>toggleMembership(e)} value={49999} active>
                    Enroll
                  </Button>
                  <Image className="qrcode none" src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/zen-49999.jpeg"/>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </div>
       <hr className="hr-large d-none d-md-block"/>
       <div className="rowcontainer none">
        <p>
           Scan the QR Code to enroll into The Dojo. Please do send the payment confirmation image/screenshot to hello@thedojoblr.com for backend verification so we
           can update your membership details!
        </p>
       </div>
       <div className="rowcontainer">
        <h2 className="header-center"> PROMOTIONS </h2>
        <p>
          We're currently running the below mentioned promotions to facilitate & provide martial arts training at discounted rates! Eligible candidates, Please
          email your credentials along with ID cards in order to avail the same :-
          <ul>
            <li> First responders such as police officers, army veterans/soldiers, doctors, nurses, etc. get 50% off on the membership plans</li>
            <li> Students get 25% off on membership plans on submission of valid ID cards</li>
            <li> Invite your friend or family and if they enroll, both you and they get 15 days added to your membership plan! </li>
          </ul>
        </p>
       </div>
       <hr className="hr-large d-none d-md-block"/>
       {rentalSection}
     </div>
    </main>
  );
}

export default Membership
