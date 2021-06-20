import {React, useState } from 'react';
import {Card, CardDeck, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import '../css/Membership.css';

function Membership(props) {

  return (
    <main>
      <div className="contact-form">
        <div className="fixing-newsletter">
          <div className="thumbnail center well well-sm text-center">
            <h1 className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> FLEXIBLE PLANS </h1>
            <p className="space col-md-12 col-xl-12 col-sm-12 col-xs-12"> Choose a plan that works best for you </p>
            <hr className="hr-large d-none d-md-block"/>
            <CardDeck>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title>Ronin (Day) Pass <br/> <br/><strong><h3> Rs.500 </h3> </strong>
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
                  <Card.Link href="#">
                    <Button variant="primary" size="lg" active>
                      Enroll
                    </Button>{' '}
                  </Card.Link>
                </Card.Body>
              </Card>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title> Samurai (Month) Pass <br/> <br/><strong><h3> Rs.4500 </h3> </strong>
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
                  <Card.Link href="#">
                    <Button variant="primary" size="lg" active>
                      Enroll
                    </Button>{' '}
                  </Card.Link>
                </Card.Body>
              </Card>
              <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Card.Body>
                  <Card.Title> Zen (Annual) Pass <br/> <br/><strong><h3> Rs.40000 </h3> </strong>
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
                  <Card.Link href="#">
                    <Button variant="primary" size="lg" active>
                      Enroll
                    </Button>{' '}
                  </Card.Link>
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
