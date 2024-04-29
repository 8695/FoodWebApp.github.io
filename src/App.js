import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './Component/footer';
import { Navbar } from './Component/navbar';
import { About } from './Component/pages/about';
import { Contact } from './Component/pages/contact';
import { Home } from './Component/home';
import LoginForm from './Component/pages/login';
import { Signup } from './Component/pages/signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />}>
          </Route>
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
