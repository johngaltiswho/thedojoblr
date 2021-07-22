import {React, useState, useEffect } from 'react';
import {Card, CardDeck, ListGroup, ListGroupItem} from 'react-bootstrap'
import axios from 'axios'
import '../css/Enquiry.css';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Calendar from 'react-calendar';
import moment from 'moment';

function Profile(props) {
  const [users, setUsers] = useState([])
  const history = useHistory();
  const { user } = useAuth0();
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log(user)
    console.log("Front end working right");
    axios.get('/user/all-users')
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => console.log(err));
  }, []);

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
            <td className="section-hide"> { user.name }</td>
            <td className="section-hide"> { user.phone }</td>
            <td className="section-hide"> { user.email }</td>
            <td className="section-hide"> { moment(user.createdAt).format('DD-MM-YYYY') }</td>
            <td className="section-hide"> { moment(user.membership.endDate).format('DD-MM-YYYY') }</td>
            <td className="section-hide"> { moment(new Date()).isAfter(moment(user.membership.endDate)) ? "INACTIVE" : "ACTIVE"}</td>
          </tr>
        ))}
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
              {usersDisplay}
            </div>
          </div>
        </div>
        <hr className="hr-large"/>
      </div>
    </main>
  );
}

export default Profile
