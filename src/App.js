// import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import LoginSuccess from './components/login_success_page/loginSuccess';
import Registration from './components/register/registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <>
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path="/login_success" element={<LoginSuccess />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App;
