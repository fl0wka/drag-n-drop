import { FC, DragEvent } from 'react';
import { BoardCardProps, IBoard, IBoardCard } from '../../types/types';

const BoardCard: FC<BoardCardProps> = ({
  item,
  board,
  currentBoard,
  setCurrentBoard,
  currentItem,
  setCurrentItem,
  updateBoards,
}) => {
  function dragStartHandler(
    e: DragEvent<HTMLDivElement>,
    board: IBoard,
    item: IBoardCard
  ): void {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragLeaveHandler(e: DragEvent<HTMLDivElement>): void {
    e.currentTarget.style.boxShadow = 'none';
  }
  function dragEndHandler(e: DragEvent<HTMLDivElement>): void {
    e.currentTarget.style.boxShadow = 'none';
  }
  function dragOverHandler(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    if (e.currentTarget.className === 'board__item') {
      e.currentTarget.style.boxShadow = '0 4px 3px gray';
    }
  }
  function dropHandler(
    e: DragEvent<HTMLDivElement>,
    board: IBoard,
    item: IBoardCard
  ): void {
    e.preventDefault();
    e.currentTarget.style.boxShadow = 'none';

    if (currentBoard && currentItem) {
      if (currentItem === item) {
        return;
      }

      if (currentBoard === board) {
        const currentIndex = currentBoard.items.indexOf(currentItem);
        const copyCurrentBoard: IBoard = JSON.parse(
          JSON.stringify(currentBoard)
        );
        copyCurrentBoard.items.splice(currentIndex, 1);
        const dropIndex = currentBoard.items.indexOf(item);
        copyCurrentBoard.items.splice(dropIndex, 0, currentItem);
        const copyBoard: IBoard = JSON.parse(JSON.stringify(board));

        copyBoard.items = copyCurrentBoard.items; // ???

        updateBoards(copyBoard, copyCurrentBoard);
      }

      if (currentBoard !== board) {
        const currentIndex = currentBoard.items.indexOf(currentItem);
        const copyCurrentBoard: IBoard = JSON.parse(
          JSON.stringify(currentBoard)
        );
        copyCurrentBoard.items.splice(currentIndex, 1);
        const dropIndex = board.items.indexOf(item);
        const copyBoard: IBoard = JSON.parse(JSON.stringify(board));
        copyBoard.items.splice(dropIndex + 1, 0, currentItem);
        updateBoards(copyBoard, copyCurrentBoard);
      }
    }
  }

  return (
    <div
      onDragStart={(e) => dragStartHandler(e, board, item)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, board, item)}
      draggable={true}
      className="board__item"
    >
      {item.title}
    </div>
  );
};

export default BoardCard;
