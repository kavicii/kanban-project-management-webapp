import './App.css';
import NavBar from './component/NavBar';
import './global.css'; 
import CardContainer from './component/CardContainer'; 
import { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';

function App() {
  const [cards, setCards] = useState([
    { id: '1', text: 'Card 1', title: 'Title 1', description: 'Description 1' },
    { id: '2', text: 'Card 2', title: 'Title 2', description: 'Description 2' },
    // 更多卡片
]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newCards = Array.from(cards);
    const [removed] = newCards.splice(result.source.index, 1);
    newCards.splice(result.destination.index, 0, removed);

    setCards(newCards);
};
  return (
    <div className='app-container'>
      <NavBar/>
      <CardContainer id="droppable-1" cards={cards} onDragEnd={onDragEnd} />
    </div>
  );
}

export default App;