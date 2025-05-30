import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login';
import Register from './Pages/Home/Register';
import VolunteerDashboard from './Pages/VolunteerDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboardV' element={<VolunteerDashboard />} />
      </Routes>
    </BrowserRouter>
);
