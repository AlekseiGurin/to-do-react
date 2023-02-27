import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

type TasksType = {
    id: string;
    title: string;
    taskStartDate: number;
}

const initialState: TasksType[] = [];

export const taskSlice = createSlice({
     name: 'tasks',
     initialState,
     reducers: {
         addTask: (state, action:PayloadAction<TasksType>) => {
            state.push(action.payload)
        }
     }
 });

export const { addTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;