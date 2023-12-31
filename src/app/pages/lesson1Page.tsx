import { useState, FC } from 'react';
import Card from '../components/common/card';
import { ICardData } from '../types/types';

const Lesson1Page: FC = () => {
  const [cardList, setCardList] = useState<ICardData[]>([
    { id: 1, order: 1, text: 'num 1', bgColor: 'red' },
    { id: 2, order: 2, text: 'num 2', bgColor: 'green' },
    { id: 3, order: 3, text: 'num 3', bgColor: 'orange' },
    { id: 4, order: 4, text: 'num 4', bgColor: 'grey' },
  ]);

  return (
    <div className="container">
      <Card cardList={cardList} setCardList={setCardList} />
    </div>
  );
};

export default Lesson1Page;
