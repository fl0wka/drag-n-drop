import { FC } from 'react';
import { BoardProps } from '../../types/types';

const Board: FC<BoardProps> = ({ title, children }) => {
  return (
    <div className="board">
      <div className="board__title">{title}</div>
      {children}
    </div>
  );
};

export default Board;
