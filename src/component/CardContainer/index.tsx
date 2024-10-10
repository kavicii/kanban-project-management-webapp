// src/CardContainer/index.tsx
import React from 'react';
import { Droppable, Draggable, DragDropContext, DropResult } from 'react-beautiful-dnd';
import TaskCard from '../TaskCard';
import './index.css';

interface CardContainerProps {
    id: string;
    cards: Array<{ id: string; text: string; title: string; description: string }>;
    onDragEnd: (result: DropResult) => void;
}

const CardContainer: React.FC<CardContainerProps> = ({ id, cards, onDragEnd }) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className='card-container'
                    >
                        {cards.map((card, index) => (
                            <Draggable key={card.id} draggableId={card.id} index={index}>
                                {(provided, snapshot) => (
                                    <TaskCard
                                        id={card.id}
                                        index={index}
                                        title={card.title}
                                        description={card.description}
                                        provided={{ ...provided, snapshot }}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default CardContainer;