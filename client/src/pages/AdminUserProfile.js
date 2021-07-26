import {React, useState, useEffect } from 'react';
import {Card, CardDeck, ListGroup, ListGroupItem} from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import '../css/Enquiry.css';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Calendar from 'react-calendar';
import moment from 'moment';

function AdminUserProfile(props) {
  const [profile, setProfile] = useState({name: "",email: "",phone:"",bio:"", endDate:"", startDate:""});
  const [address, setAddress] = useState({street1: "", city:"",state:"",zip:"",country:""})
  const [orders, setOrders] = useState([])
  const history = useHistory();
  const { user } = useAuth0();
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    // console.log(user)
    console.log("Front end working right");
    axios.get('/user?email=' + props.match.params.email)
    .then(res => {
      console.log(res.data);
      setProfile({
        name: res.data.name || "",
        email: res.data.email || "",
        phone: res.data.phone || "",
        bio: res.data.bio || "",
        endDate: res.data.membership.endDate || "",
        startDate: res.data.createdAt || ""
      })
      if(res.data.address) {
        setAddress({
          street1: res.data.address.street1,
          city: res.data.address.city,
          state: res.data.address.state,
          zip: res.data.address.zip,
          country: res.data.address.country,
        })
      }
    })
    .catch(err => console.log(err));
    axios.get('/order?email=' + props.match.params.email)
    .then(res => {
      console.log(res.data)
      setOrders(res.data)
    })
    .catch(err => console.log(err));
  }, []);

  const handleSetProfile = e => {
    const { name, value } = e.target;
    setProfile(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSetAddress = e => {
    const { name, value } = e.target;
    setAddress(prevState => ({
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
      bio: profile.bio,
      street1: address.street1,
      city: address.city,
      state: address.state,
      zip: address.zip,
      country: address.country
    })
    .then(res => {
      setProfile(prevState => ({
        ...prevState,
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        bio: res.data.bio,
      }));
      if(res.data.address) {
        setAddress(prevState => ({
          ...prevState,
          street1: res.data.address.street1,
          city: res.data.address.city,
          state: res.data.address.state,
          zip: res.data.address.zip,
          country: res.data.address.country,
        }));
      }
    })
    .catch(err => console.log(err));
  };

  const orderHeader = (
    <>
      <thead>
        <tr>
          <th scope="col" data-sortable='true'> Date </th>
          <th scope="col" data-sortable='true'> Order ID </th>
          <th className="section-hide" scope="col" data-sortable='true'> Membership </th>
          <th className="col-width-200px" scope="col" data-sortable='true'> Amount </th>
        </tr>
      </thead>
    </>
  )

  const ordersDisplay = (
    <div className="col-md-12 col-xl-12 col-sm-12 col-xs-12 b2corders">
      <table className='table row-number'>
        {orderHeader}
        <tbody >
        {orders.map((order, i) => (
          <tr key={order.orderId}>
            <td className="section-hide"> {moment(order.createdAt).format("DD-MMM-YY")}</td>
            <td className="section-hide"> {order.orderId}</td>
            <td className="section-hide"> {order.membership} </td>
            <td> {order.amount} </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )

  const orderCards = (
    <div className="full-width">
      <CardDeck className="profile-deck">
        {orders.map((order, i) => (
          <Card key={order.orderId} className="profile-card col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <Card.Body>
              <Card.Title>{order.membership} <br/> <br/><strong><h3> Rs.{order.amount} </h3> </strong>
              </Card.Title>
              <Card.Text>
                <h3> <strong> PAID </strong> </h3>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{moment(order.createdAt).format("DD-MMM-YY")}</ListGroupItem>
              <ListGroupItem>{order.orderId}</ListGroupItem>
            </ListGroup>
          </Card>
        ))}
      </CardDeck>
    </div>
  );

  return (
    <main>
      <div className="contact-form">
      <div className="fixing-newsletter">
        <div className="thumbnail center well well-sm text-center">
          <h1 className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> PROFILE</h1>
          <hr className="hr-large d-none d-md-block"/>
          <div className="rowcontainer">
            <div className="col-md-12 col-xl-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-4">
                 <div className="md-form">
                   <input  className="form-control fixed-input" name="name" value={moment(profile.startDate).format("DD-MMM-YY")} disabled/>
                     <label htmlFor="name">Membership Start Date</label>
                  </div>
                </div>
                <div className="col-md-4">
                 <div className="md-form">
                   <input  className="form-control fixed-input" name="email" value={profile.email} disabled/>
                   <label htmlFor="email">Your Email</label>
                 </div>
               </div>
               <div className="col-md-4">
                <div className="md-form">
                  <input  className="form-control fixed-input" name="name" value={moment(profile.endDate).format("DD-MMM-YY")} disabled/>
                  <label htmlFor="name">Membership End Date</label>
                 </div>
               </div>
              </div>
            </div>
           <div className="col-md-6 col-xl-6 col-sm-12 col-xs-12">
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
                  <textarea  className="form-control" name="bio" value={profile.bio} onChange={handleSetProfile}/>
                  <label htmlFor="message">Bio</label>
                </div>
              </div>
            </div>
           </div>
           <div className="col-md-6 col-xl-6 col-sm-12 col-xs-12">
             <div className="row">
               <div className="col-md-12">
                <div className="md-form">
                  <input  className="form-control" name="street1" value={address.street1} onChange={handleSetAddress}/>
                    <label htmlFor="name">Street</label>
                 </div>
               </div>
               <div className="col-md-6">
                <div className="md-form">
                  <input  className="form-control" name="city" value={address.city} onChange={handleSetAddress}/>
                  <label htmlFor="email">City</label>
                </div>
               </div>
               <div className="col-md-6">
                <div className="md-form">
                  <input  className="form-control" name="state" value={address.state} onChange={handleSetAddress}/>
                  <label htmlFor="phone">State</label>
                </div>
               </div>
               <div className="col-md-6">
                <div className="md-form">
                  <input  className="form-control" name="zip" value={address.zip} onChange={handleSetAddress}/>
                  <label htmlFor="phone">Zip Code</label>
                </div>
               </div>
               <div className="col-md-6">
                <div className="md-form">
                  <input  className="form-control" name="country" value={address.country} onChange={handleSetAddress}/>
                  <label htmlFor="phone">Country</label>
                </div>
               </div>
             </div>
           </div>
         </div>
         <input className = "btn btn-large btn-primary" type='submit' value='UPDATE PROFILE' name="Submit" onClick={submitProfile} />
       </div>
       <hr className="hr-large"/>
       <div className="thumbnail center well well-sm text-center">
         <h1 className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> ORDERS </h1>
         <hr className="hr-large d-none d-md-block"/>
         <div className="rowcontainer">
          {orderCards}
         </div>
       </div>

      <hr className="hr-large"/>
     </div>
   </div>
</main>
  );
}

export default AdminUserProfile
