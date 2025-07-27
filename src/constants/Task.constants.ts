import { IColumn, ITask } from "@/types/Task";

const COLUMNS: IColumn[] = [
    {
        id: 'TODO',
        title: 'To Do'
    },
    {
        id: 'IN_PROGRESS',
        title: 'In Progress'
    },
    {
        id: 'DONE',
        title: 'Done'
    }
]

const INITIAL_TASKS: ITask[] = [
    {
        id: '1',
        status: 'TODO',
        title: 'Sample Task 1',
        description: 'This is a sample task description for task 1.'
    },
    {
        id: '2',
        status: 'IN_PROGRESS',
        title: 'Sample Task 2',
        description: 'This is a sample task description for task 2.'
    },
    {
        id: '3',
        status: 'DONE',
        title: 'Sample Task 3',
        description: 'This is a sample task description for task 3.'
    }
] 

export { COLUMNS, INITIAL_TASKS };