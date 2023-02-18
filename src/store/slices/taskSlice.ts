import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

type TasksType = {
    id: string;
    title: string;
    taskStartDate: number;
}

const initialState: TasksType[] = [];

