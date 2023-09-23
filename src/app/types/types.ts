import type { Dispatch, SetStateAction } from 'react';

export interface CardProps {
  cardList: CardData[];
  setCardList: Dispatch<SetStateAction<CardData[]>>;
}

export interface CardData {
  id: number;
  order: number;
  text: string;
  bgColor: string;
}
