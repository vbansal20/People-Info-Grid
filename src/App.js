import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Posts from './Components/Posts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/user/:id" element={<Profile/>} />
            <Route path="/posts" element={<Posts/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
