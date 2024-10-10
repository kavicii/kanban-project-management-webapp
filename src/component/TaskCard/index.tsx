// src/TaskCard/index.tsx
import './index.css';

interface TaskCardProps {
    id: string;
    index: number;
    title: string;
    description: string;
    provided?: any;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, index, title, description, provided }) => {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            snapshot={provided.snapshot}
            className="task-card"
        >
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default TaskCard;