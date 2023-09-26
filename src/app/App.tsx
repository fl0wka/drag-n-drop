import { useState } from 'react';
import './assets/css/App.css';
import Card from './components/common/card';
import { CardData } from './types/types';
import Navbar from './components/ui/navbar';

function App() {
  const [cardList, setCardList] = useState<CardData[]>([
    { id: 1, order: 1, text: 'num 1', bgColor: 'red' },
    { id: 2, order: 2, text: 'num 2', bgColor: 'green' },
    { id: 3, order: 3, text: 'num 3', bgColor: 'orange' },
    { id: 4, order: 4, text: 'num 4', bgColor: 'grey' },
  ]);

  return (
    <div>
      <Navbar />
      <div className="main">
        <Card cardList={cardList} setCardList={setCardList} />
      </div>
    </div>
  );
}

export default App;
