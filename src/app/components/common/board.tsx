import { FC, DragEvent } from 'react';
import { BoardProps, IBoard } from '../../types/types';
import { copyItem } from '../../utils/copyItem';
import { deleteElementOfArray } from '../../utils/deleteElementOfArray';

const Board: FC<BoardProps> = ({
  title,
  children,
  board,
  currentBoard,
  currentItem,
  updateBoards,
}) => {
  function dropOverHandler(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
  }

  function dropItemHandler(board: IBoard) {
    if (currentBoard && currentItem) {
      if (board.items.length === 0) {
        const copyBoard: IBoard = copyItem(board);
        copyBoard.items.push(currentItem);
        const currentIndex = currentBoard.items.indexOf(currentItem);
        const copyCurrentBoard: IBoard = copyItem(currentBoard);
        deleteElementOfArray(copyCurrentBoard.items, currentIndex);
        updateBoards(copyBoard, copyCurrentBoard);
      }
    }
  }

  return (
    <div
      className="board"
      onDragOver={(e) => dropOverHandler(e)}
      onDrop={(e) => dropItemHandler(board)}
    >
      <div className="board__title">{title}</div>
      {children}
    </div>
  );
};

export default Board;
