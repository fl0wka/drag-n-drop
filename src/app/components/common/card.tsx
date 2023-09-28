import { FC, DragEvent, useState } from 'react';
import { CardProps, ICardData } from '../../types/types';

const Card: FC<CardProps> = ({ cardList, setCardList }) => {
  const [currentCard, setCurrentCard] = useState<ICardData | null>(null);

  function dragStartHandler(e: DragEvent<HTMLDivElement>, item: ICardData) {
    setCurrentCard(item);
  }

  function dragEndHandler(e: DragEvent<HTMLDivElement>) {
    e.currentTarget.style.opacity = `100%`;
  }

  function dragOverHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.currentTarget.style.opacity = '25%';
  }

  function dropHandler(e: DragEvent<HTMLDivElement>, item: ICardData) {
    e.preventDefault();
    setCardList(
      cardList.map((i) => {
        if (currentCard) {
          if (i.id === item.id) {
            return { ...i, order: currentCard.order };
          }
          if (i.id === currentCard.id) {
            return { ...i, order: item.order };
          }
        }
        return i;
      })
    );
    e.currentTarget.style.opacity = '100%';
  }

  const sortCards = (a: ICardData, b: ICardData): number => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      {cardList &&
        cardList.sort(sortCards).map((item) => (
          <div
            key={item.id}
            className="card"
            style={{ backgroundColor: item.bgColor }}
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, item)}
            draggable={true}
          >
            <h1>{item.text}</h1>
          </div>
        ))}
    </>
  );
};

export default Card;
