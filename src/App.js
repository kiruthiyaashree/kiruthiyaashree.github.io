import About from "./components/About";
import Home from "./components/Home";
import "@fontsource/poppins";
import Resume from "./components/Resume";
import Demo from "./components/Demo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <Router>
    <div className="">
      <div >
      <Sidebar/>
      <Switch>
        <Route to='/' exact Component={Home}/>
        <Route to='/' exact Component={Home}/>
        <Route to='/' exact Component={Home}/>
        <Route to='/' exact Component={Home}/>

      </Switch>
        {/* <Home/> */}
        </div>
      <br/>
      <br/>
      <br/>
      <div >
        <About/>
      </div>
      <br/>
      <br/>
      <br/>
      <div >
        <Resume/>
      </div>

      <br/>
      <br/>
      <br/>
      <div >
            <Demo/>
      </div>

      <br/>
      <br/>
      <br/>
      <div >
        <ContactForm/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;