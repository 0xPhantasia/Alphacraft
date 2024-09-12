import '../styles/main.css'
import '../styles/App.css';
import Home from './Home.js';
import Contact from './Contact.js';
import Creation from './Creation.js';
import Manager from './Manager.js';
import Login from './Login.js';
import Faq from './Faq';
import Coffee from './Coffee';
import CreationOptions from './CreationOptions';
import NotFound from './NotFound.js';
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Server-creation' element={<Creation />} />
        <Route path='/Server-management' element={<Manager />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/FAQ' element={<Faq />} />
        <Route path='/Coffee' element={<Coffee />} />
        <Route path='/CreationOptions' element={<CreationOptions />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>  
    </div>
  );
}

export default App;
