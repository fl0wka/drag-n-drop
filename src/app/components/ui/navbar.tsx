import { FC } from 'react';
import { INavbarTitle } from '../../types/types';
import Button from '../common/button';

const Navbar: FC = () => {
  const navbarTitles: INavbarTitle[] = [
    { link: 'lesson1', title: 'lesson 1' },
    { link: 'lesson2', title: 'lesson 2' },
    { link: 'lesson3', title: 'lesson 3' },
  ];

  return (
    <nav className="navbar">
      <div className="brand">DRAG and DROP</div>
      <div className="nav">
        {navbarTitles.map((btn) => (
          <Button key={btn.link} title={btn.title} link={btn.link} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
