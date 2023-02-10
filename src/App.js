import './App.css';
import Home from './Components/Home';
import Navbar from './Layouts/Navbar';

import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Footer from './Layouts/Footer';

function App() {
  return (
    <div className="App">
      <Router>

          <Navbar/>

          <Route path='/' exact>
            <Home/>
          </Route>

          <Redirect to='/' />
        
        <Footer/>

      </Router>
     
    </div>
  );
}

export default App;
