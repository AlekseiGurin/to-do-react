import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from '../store';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        const respons = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await respons.json();
        return data;
    }
);


type TasksType = {
    id: string;
    title: string;
    taskStartDate: number;
}

type TasksState = {
    taskList: TasksType[],
    status: 'idle' | 'loading' | 'failed'
}

const initialState: TasksState = {
    taskList: [],
    status: 'idle'
};

export const taskSlice = createSlice({
     name: 'tasks',
     initialState,
     reducers: {
         addTask: (state, action:PayloadAction<TasksType>) => {
            state.taskList.push(action.payload)
        }
     },
    extraReducers: (builder => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'idle';
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.status = 'failed';
            });
    })
 });

export const { addTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;