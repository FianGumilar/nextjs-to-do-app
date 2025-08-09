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

interface ISelectedTask {
    activity: string; // 'create' | 'update'
    task?: ITask;
}

export type { ITask, IColumn, ISelectedTask };