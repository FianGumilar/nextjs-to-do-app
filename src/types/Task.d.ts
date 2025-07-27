type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

interface ITask {
    id: string;
    status: string;
    title: string;
    description: string;
}

interface IColumn {
    id: TaskStatus;
    title: string;
}

export type { ITask, IColumn };