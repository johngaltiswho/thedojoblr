import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from "./auth/protected-route";
import { useAuth0 } from "@auth0/auth0-react";

import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Home from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Enquiry from './pages/Enquiry'
import Schedule from './pages/Schedule'
import Membership from './pages/Membership'
import GymRules from './pages/GymRules'
import Artists from './pages/Artists'
import Arts from './pages/Arts'
import TheDojoExperience from './pages/TheDojoExperience'
import ThankYouContact from './pages/ThankYouContact'
import ThankYouNewsletter from './pages/ThankYouNewsletter'
import OrderConfirmation from './pages/OrderConfirmation'
import Profile from './pages/Profile'
import AllUsers from './pages/AllUsers'
import AdminUserProfile from './pages/AdminUserProfile'
import ContactInfo from './pages/ContactInfo'
import FAQ from './pages/FAQ'

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/privacy-policy' component={PrivacyPolicy}/>
            <Route exact path='/enquiry' component={Enquiry}/>
            <Route exact path='/schedule' component={Schedule}/>
            <Route exact path='/membership' component={Membership}/>
            <Route exact path='/gym-rules' component={GymRules}/>
            <Route exact path='/the-artists' component={Artists}/>
            <Route exact path='/the-arts' component={Arts}/>
            <Route exact path='/the-dojo-experience' component={TheDojoExperience}/>
            <Route exact path='/thank-you-for-contacting-us' component={ThankYouContact}/>
            <Route exact path='/thank-you-for-signing-up' component={ThankYouNewsletter}/>
            <Route exact path='/order-confirmation' component={OrderConfirmation}/>
            <Route exact path='/frequently-asked-questions' component={FAQ}/>
            <ProtectedRoute exact path='/users' component={AllUsers}/>
            <ProtectedRoute exact path='/profile' component={Profile}/>
            <ProtectedRoute exact path='/contact-info' component={ContactInfo}/>
            <ProtectedRoute path='/users/:email' component={AdminUserProfile}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
