import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="brand">DRAG and DROP</div>
      <ul className="nav">
        <li>
          <Link to="lesson1" className="active">
            lesson 1
          </Link>
        </li>
        <li>
          <Link to="lesson2">lesson 2</Link>
        </li>
        <li>
          <Link to="lesson3">lesson 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
