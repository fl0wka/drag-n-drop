import type { Dispatch, SetStateAction, ReactNode, DragEvent } from 'react';

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
  board: IBoard;
  currentBoard: IBoard | null;
  currentItem: IBoardCard | null;
  updateBoards: (board: IBoard, currentBoard: IBoard) => void;
}

export interface BoardCardProps {
  item: IBoardCard;
  board: IBoard;
  currentBoard: IBoard | null;
  setCurrentBoard: Dispatch<SetStateAction<IBoard | null>>;
  currentItem: IBoardCard | null;
  setCurrentItem: Dispatch<SetStateAction<IBoardCard | null>>;
  updateBoards: (board: IBoard, currentBoard: IBoard) => void;
}

export interface INavbarTitle {
  link: string;
  title: string;
}

export interface ButtonProps {
  title: string;
  link: string;
}
