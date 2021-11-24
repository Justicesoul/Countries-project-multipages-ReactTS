import { Link } from 'react-router-dom';
import Home from './Pages/Home';
import Countries from './Pages/Countries';
import Country from './Pages/Country';
import NotFound from './Pages/NotFound';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="page">
      <nav className="nav">
        <Link className="nav__item" to="/home">
          Home
        </Link>
        <Link className="nav__item" to="/countries">
          Countries
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
