import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Enquiry from './pages/Enquiry'
import Schedule from './pages/Schedule'
import Membership from './pages/Membership'
import GymRules from './pages/GymRules'
import Instructors from './pages/Instructors'
import TheDojoExperience from './pages/TheDojoExperience'

function App() {
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
            <Route path='/instructors' component={Instructors}/>
            <Route path='/the-dojo-experience' component={TheDojoExperience}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
