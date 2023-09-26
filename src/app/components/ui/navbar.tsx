import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <a className="brand" href="#">
        DRAG and DROP
      </a>
      <ul className="nav">
        <li>
          <a className="active" href="#">
            lesson 1
          </a>
        </li>
        <li>
          <a href="#">lesson 2</a>
        </li>
        <li>
          <a href="#">lesson 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
