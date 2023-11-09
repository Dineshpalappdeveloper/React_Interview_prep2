import { createSlice } from "@reduxjs/toolkit"
const CounterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0
    },
    reducers: {
        add: (state) => {
            state.count = state.count + 1
        },
        sub: (state) => {
            state.count = state.count - 1
        }
    }
})
export const { add, sub } = CounterSlice.actions
export default CounterSlice.reducer