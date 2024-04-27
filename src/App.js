
import { Footer } from './Component/footer';
import { Navbar } from './Component/navbar';
import { About } from './Component/pages/about';
import { Contact } from './Component/pages/contact';


import LoginForm from './Component/pages/login';
import { Signup } from './Component/pages/signup';

function App() {
  return (
    <div className="App">
    <Navbar />
    
   <Contact />
    <Footer />
    </div>
  );
}

export default App;
