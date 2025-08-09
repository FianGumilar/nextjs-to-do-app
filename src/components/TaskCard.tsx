import { ISelectedTask, ITask } from "@/types/Task";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

interface TaskCardProps {
    task: ITask;
    key?: string;
    setSelectedTask?: ({activity, task}: ISelectedTask) => void;
}

const TaskCard = (props: TaskCardProps) => {
    const { task, key, setSelectedTask } = props;
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            key={key}
            className="cursor-grab flex justify-between rounded-lg bg-neutral-50 p-4 shadow-sm hover:shadow-md"
        >
            <div>
                <h3 className="font-medium text-neutral-700">{task.title}</h3>
                <p className="mt-2 text-sm text-neutral-500">{task.description}</p>
            </div>

            <div className="cursor-pointer relative h-fit" 
                onMouseEnter={() => setShowDropdown(true)} 
                onMouseLeave={() => setShowDropdown(false)}>
                <HiDotsHorizontal />
                <div className={`absolute right-0 top-0 p-2 w-48 rounded-lg bg-white shadow-md transition-all duration-200 ${showDropdown ? "flex flex-col" : "hidden"}`}>
                    <div className="cursor-pointer p-2 rounded-md hover:bg-neutral-100"
                        onMouseDown={() => setSelectedTask && setSelectedTask({ activity: 'update', task })}>
                        Update
                    </div>
                    <div className="text-red-500 cursor-pointer p-2 rounded-md hover:bg-neutral-100"
                        onMouseDown={() => setSelectedTask && setSelectedTask({ activity: 'delete', task })}>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;