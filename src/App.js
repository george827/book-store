import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <div className="mainContainer">
        <nav className="naviagation">
          <h1>Bookstore CMS</h1>
          <ul className="nav-links">
            <li>
              <Link className="home-link" to="/">Books</Link>
            </li>
            <li>
              <Link className="categories-link" to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
