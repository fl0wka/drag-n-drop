import type { Dispatch, SetStateAction, ReactNode } from 'react';

/***** LESSON 1 *****/
export interface CardProps {
  cardList: ICardData[];
  setCardList: Dispatch<SetStateAction<ICardData[]>>;
}

export interface ICardData {
  id: number;
  order: number;
  text: string;
  bgColor: string;
}

/***** LESSON 2 *****/
export interface IBoardCard {
  id: number;
  title: string;
}

export interface IBoard {
  id: number;
  title: string;
  items: IBoardCard[];
}

export interface BoardProps {
  title: string;
  children: ReactNode;
}

export interface BoardCardProps {
  item: IBoardCard;
  board: IBoard;
}
