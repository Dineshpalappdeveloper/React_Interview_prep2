import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./CounterSlice"
const Store = configureStore({
    reducer: {
        count: CounterSlice
    }
})
export default Store