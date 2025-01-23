import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "input",
    initialState: {
        email: "",
        address: "",
    },

    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
    },
});

export const { setEmail, setAddress } = userSlice.actions;

export default userSlice.reducer;
