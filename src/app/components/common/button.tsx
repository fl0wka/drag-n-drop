import { FC } from 'react';
import { ButtonProps } from '../../types/types';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Button: FC<ButtonProps> = ({ title, link }) => {
  const resolvedPath = useResolvedPath(link);
  console.log(resolvedPath.pathname);
  const isActive = useMatch({ path: resolvedPath.pathname });
  console.log(isActive);

  return (
    <div className={`btn ${isActive ? 'active' : ''}`}>
      <Link to={link}>{title}</Link>
    </div>
  );
};

export default Button;
