import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    test: ''
}

const productReleases = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getToken: (state, action) => {
            console.log(action.payload);
            state.test = action.payload;
        }
    }
});

const { actions, reducer } = productReleases;

export const { getToken } = actions;
export default reducer;