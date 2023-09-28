import { FC, useState } from 'react';
import Board from '../components/common/board';
import { IBoard } from '../types/types';
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

  return (
    <div className="container">
      {boards.map((board) => (
        <Board key={board.id} title={board.title}>
          {board.items.map((item) => (
            <BoardCard key={item.id} item={item} board={board} />
          ))}
        </Board>
      ))}
    </div>
  );
};

export default Lesson2Page;
