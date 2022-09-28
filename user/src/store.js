import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./features/userSlice";
import instructorReducer from "./features/instructorSlice";

export default configureStore({
    reducer: {
        user: useReducer,
        instructor: instructorReducer
    }
});