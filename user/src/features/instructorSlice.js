import { createSlice } from "@reduxjs/toolkit";

export const instructorSlice = createSlice({
    name: "instructor",
    initialState: {
        instructor: null,
        err: null
    },

    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null
        },
        register: (state, action) => {
            state.user = action.payload
        },
        update : (state, action) => {
            state.user = action.payload
        },
        changePassword : (state, action) => {
            state.user = action.payload
        }
    }
});

export const { login, logout, register, update, changePassword } = instructorSlice.actions;

export const selectInstructor = (state) => state.instructor.instructor;

export default instructorSlice.reducer;