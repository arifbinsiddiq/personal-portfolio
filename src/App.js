import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './components/Pages/Navigation/Navigation';
import SingleProject from './components/Pages/SingleProject/SingleProject';
import Home from './components/Pages/Home/Home';
import Blogs from './components/Pages/Blogs/Blogs';


function App() {
  return (
    <Router>
          <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectKey" element={<SingleProject />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
    </Router>
  );
}

export default App;
