import { FC, DragEvent, useState } from 'react';
import { BoardCardProps, IBoard, IBoardCard } from '../../types/types';

const BoardCard: FC<BoardCardProps> = ({ item, board }) => {
  const [currentBoard, setCurrentBoard] = useState<IBoard | null>(null);
  const [currentItem, setCurrentItem] = useState<IBoardCard | null>(null);

  function dragStartHandler(
    e: DragEvent<HTMLDivElement>,
    board: IBoard,
    item: IBoardCard
  ) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragLeaveHandler(e: DragEvent<HTMLDivElement>) {
    e.currentTarget.style.boxShadow = 'none';
  }
  function dragEndHandler(e: DragEvent<HTMLDivElement>) {
    e.currentTarget.style.boxShadow = 'none';
  }
  function dragOverHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    if (e.currentTarget.className === 'board__item') {
      e.currentTarget.style.boxShadow = '0 4px 3px gray';
    }
  }
  function dropHandler(
    e: DragEvent<HTMLDivElement>,
    board: IBoard,
    item: IBoardCard
  ) {
    e.preventDefault();
  }

  return (
    <div
      onDragStart={(e) => {
        dragStartHandler(e, board, item);
      }}
      onDragLeave={(e) => {
        dragLeaveHandler(e);
      }}
      onDragEnd={(e) => {
        dragEndHandler(e);
      }}
      onDragOver={(e) => {
        dragOverHandler(e);
      }}
      onDrop={(e) => {
        dropHandler(e, board, item);
      }}
      draggable={true}
      className="board__item"
    >
      {item.title}
    </div>
  );
};

export default BoardCard;
