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
import Profile from './pages/Profile'
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
            <Route path='/privacy-policy' component={PrivacyPolicy}/>
            <Route path='/enquiry' component={Enquiry}/>
            <Route path='/schedule' component={Schedule}/>
            <Route path='/membership' component={Membership}/>
            <Route path='/gym-rules' component={GymRules}/>
            <Route path='/the-artists' component={Artists}/>
            <Route path='/the-arts' component={Arts}/>
            <Route path='/the-dojo-experience' component={TheDojoExperience}/>
            <Route path='/thank-you-for-contacting-us' component={ThankYouContact}/>
            <Route path='/thank-you-for-signing-up' component={ThankYouNewsletter}/>
            <Route path='/frequently-asked-questions' component={FAQ}/>
            <ProtectedRoute path='/profile' component={Profile}/>
            <ProtectedRoute path='/contact-info' component={ContactInfo}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
