import './App.css';
import SignInSide from './SignInSide';
import SignUpSide from './SignUpSide';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    
    <div className="App">

      <div className="main">
      <Router>
        <Routes>
          <Route exact path='/' element={< SignInSide />}></Route>
          <Route exact path='/SignIn' element={< SignInSide />}></Route>
          <Route exact path='/SignUp' element={< SignUpSide />}></Route>
          <Route exact path='/Home' element={<Home />}></Route>
   
        </Routes>
      </Router>
      </div>
    
    </div>
  );
}

export default App;
