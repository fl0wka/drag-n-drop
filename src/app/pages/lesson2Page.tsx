import { FC, useState } from 'react';
import Board from '../components/common/board';
import { IBoard, IBoardCard } from '../types/types';
import BoardCard from '../components/common/boardCard';

const Lesson2Page: FC = () => {
  const [boards, setBoards] = useState<IBoard[]>([
    {
      id: 1,
      title: 'Задача',
      items: [
        { id: 1, title: 'Прослушать урок' },
        { id: 2, title: 'Выполнить тестовое задание' },
      ],
    },
    {
      id: 2,
      title: 'В процессе',
      items: [
        { id: 3, title: 'Решить задачу' },
        { id: 4, title: 'Определить трудные моменты' },
      ],
    },
    {
      id: 3,
      title: 'Выполнено',
      items: [
        { id: 5, title: 'Повторить пройденные темы' },
        { id: 6, title: 'Сделать commit' },
      ],
    },
  ]);
  const [currentBoard, setCurrentBoard] = useState<IBoard | null>(null);
  const [currentItem, setCurrentItem] = useState<IBoardCard | null>(null);

  const updateBoards = (board: IBoard, currentBoard: IBoard): void => {
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };

  return (
    <div className="container">
      {boards.map((board) => (
        <Board key={board.id} title={board.title}>
          {board.items.map((item) => (
            <BoardCard
              key={item.id}
              item={item}
              board={board}
              currentBoard={currentBoard}
              setCurrentBoard={setCurrentBoard}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              updateBoards={updateBoards}
            />
          ))}
        </Board>
      ))}
    </div>
  );
};

export default Lesson2Page;
