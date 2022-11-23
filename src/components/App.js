import '../styles/main.css'
import '../styles/App.css';
import Banner from './Banner.js';
import Contact from './Contact.js';
import Creation from './Creation.js';
import Manager from './Manager.js';
import Login from './Login.js';
import NotFound from './NotFound.js';
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Server-creation' element={<Creation />} />
        <Route path='/Server-management' element={<Manager />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>  
    </div>
  );
}

export default App;
