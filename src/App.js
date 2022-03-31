import './App.css';
import Landing from "./components/Landing";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Forms/Login";
import SignIn from './components/Forms/SignIn';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home.jsx";
import { Create } from './components/Create/Create';
import Blog from './components/Blogs/Blog.jsx';
import Contact from './components/Home/Contact/Contact';
import About from './components/Home/About/About';
import Individual from "./components/OneBlog/Individual.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/contact"  element={<Contact />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Create/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="blog/:blogId" element={<Individual/>}/>
    </Routes>
  </>
   
  );
}

export default App;
