import {React, useState, useEffect } from 'react';
import {Card, CardDeck, ListGroup, ListGroupItem, Tooltip, OverlayTrigger} from 'react-bootstrap'
import axios from 'axios'
import '../css/Enquiry.css';
import { useHistory, Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Calendar from 'react-calendar';
import moment from 'moment';

function Users(props) {
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(0);
  const history = useHistory();
  const { user } = useAuth0();
  const [paymentStatus, setPaymentStatus] = useState("");
  const [newCustomer, setNewCustomer] = useState({name: "",phone:"",email:"", endDate: "", status:""});
  const [isEditing, setEditing] = useState(false)
  const [editRow, setEditRow] = useState(null)
  const [role, setRole] = useState("")

  const editPaymentStatus = props => (
    <Tooltip {...props}>Edit Fulfillment Statu</Tooltip>
  );

  useEffect(() => {
    console.log(user)
    console.log("Front end working right");
    axios.get('/user?email=' + user.email)
    .then(res => {
      console.log(res.data)
      setRole(res.data.role)
    })
    .catch(err => console.log(err));

    axios.get('/user/all-users')
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => console.log(err));
  }, []);

  const handleCustomer = e => {
    const { name, value } = e.target;
    setNewCustomer(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const customerUpdate = (event) => {
    event.preventDefault();
    setDisabled(1)
    setTimeout(function(){
     setDisabled(0);
    }.bind(this),10000);
    axios.post('/user?tenantId=thedojo', {
      name: newCustomer.name,
      phone: newCustomer.phone,
      email: newCustomer.email,
      startDate: Date.now(),
      endDate: newCustomer.endDate,
      status: newCustomer.status,
     })
    .then(res => {
      console.log("Successfully added pending items to database")
      setUsers(res.data);
      setNewCustomer(prevState => ({
          ...prevState,
          name: "",
          phone: "",
          email: "",
          endDate: "",
          status: ""
      }));
    })
    .catch(err => console.log(err));
  };

  const editRowStatusFunc = (e) => {
    setEditing(true);
    setEditRow(e.target.name);
    // console.log(leadEdit)
  }

  const updatePaymentStatus = (e) => {
    axios.put('/user?email=' + editRow, {
      paymentStatus: paymentStatus,
    })
    .then(res => {
      console.log(res.data)
      var foundIndex = users.findIndex(x => x.email == res.data.email);
      users[foundIndex] = res.data;
    })
    .catch(err => console.log(err));
  }

  const userHeader = (
    <>
      <thead>
        <tr>
          <th className="section-hide"> No. </th>
          <th scope="col" data-sortable='true'> Name </th>
          <th scope="col" data-sortable='true'> Phone Number </th>
          <th scope="col" data-sortable='true'> Email </th>
          <th scope="col" data-sortable='true'> Start Date </th>
          <th scope="col" data-sortable='true'> End Date </th>
          <th scope="col" data-sortable='true'> Status </th>
        </tr>
      </thead>
    </>
  )


  const usersDisplay = (
  <div className="col-md-12 col-xl-12 col-sm-12 col-xs-12 b2corders">
    <table className='table row-number'>
      {userHeader}
      <tbody >
      {users.map((user, i) => (
          <tr key={user._id} className={`${(moment(new Date()).isAfter(moment(user.membership.endDate))) ? "row-space date-crossed" : "row-space"}`}>
            <td className="section-hide"> { i+1 }</td>
            <td className="section-hide"> <Link to={`/users/${user.email}`}> { user.name } </Link></td>
            <td className="section-hide"> { user.phone }</td>
            <td className="section-hide"> { user.email }</td>
            <td className="section-hide"> { moment(user.createdAt).format('DD-MM-YYYY') }</td>
            <td className="section-hide"> { moment(user.membership.endDate).format('DD-MM-YYYY') }</td>
            <td className="section-hide"> { moment(new Date()).isAfter(moment(user.membership.endDate)) ? "INACTIVE" : "ACTIVE"}</td>
          </tr>
        ))}
        <tr>
          <td className="section-hide"></td>
          <td>
            <label><input  className="tracking-input" name="name" value={newCustomer.name || ""} onChange={handleCustomer} /> </label>
          </td>
          <td>
            <label><input  className="tracking-input" name="phone" value={newCustomer.phone || ""}  onChange={handleCustomer}/> </label>
          </td>
          <td>
            <label><input  className="tracking-input" name="email" value={newCustomer.email || ""}  onChange={handleCustomer}/> </label>
          </td>
          <td>
            {moment(new Date()).format('DD-MM-YYYY')}
          </td>
          <td>
            <label><input  className="tracking-input" name="lastContacted" value={newCustomer.endDate || ""}  onChange={handleCustomer}/> </label>
          </td>
          <td>
            <label><input  className="tracking-input" name="salesRep" value={newCustomer.status || ""}  onChange={handleCustomer}/> </label>
          </td>
          <td>
            <div className = "iuo">
              <input className = "btn btn-large btn-primary" type='submit' value='&#10004;' onClick={customerUpdate}  disabled={disabled} />
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )

  return (
    <main>
      <div className="contact-form">
        <div className="fixing-newsletter">
          <div className="thumbnail center well well-sm text-center">
            <h1 className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> USERS </h1>
            <hr className="hr-large d-none d-md-block"/>
            <div className="rowcontainer">
              {role === "admin" ? usersDisplay : "Page only Accessible By Admins"}
            </div>
          </div>
        </div>
        <hr className="hr-large"/>
      </div>
    </main>
  );
}

export default Users

// <td className="section-hide">
//   { isEditing && editRow === user.email ?
//     <select className='' type="text" name={user.email} onChange={e => setPaymentStatus(e.target.value)}>
//       <option value=""> - </option>
//       <option value="PAID"> PAID </option>
//       <option value="UNPAID"> UNPAID </option>
//     </select>
//     :
//     user.paymentStatus
//   }
// </td>
// <td className="section-hide">
//   <div className = "iuo">
//     <input className = {isEditing && editRow === user.email ?  "btn btn-large btn-primary" : "hidden" } type='submit' value='X' name={user.email} onClick={(e) => setEditing(false)} />
//     <input className = {isEditing && editRow === user.email ?  "btn btn-large btn-primary" : "hidden" } type='submit' value='&#10004;' name={user.email} onClick={updatePaymentStatus} />
//     <OverlayTrigger placement="right" overlay={editPaymentStatus}>
//       <input className = {isEditing && editRow === user.email ?  "hidden" : "no-background-button" } type='submit' value='&#x270E;' name={user.email} onClick={editRowStatusFunc} />
//     </OverlayTrigger>
//   </div>
// </td>
