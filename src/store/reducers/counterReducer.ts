import { createSlice } from '@reduxjs/toolkit';

// State tanımlama
interface CounterState {
  count: number;
}

// Initial state tanımlama
const initialState: CounterState = {
  count: 0,
};

// Actions tanımlama
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
