import React from 'react';
import './NavBar.scss';

interface NavBarProps {
  links: { label: string; href: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
