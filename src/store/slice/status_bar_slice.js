import {createSlice} from '@reduxjs/toolkit';

export const statusBarSlice = createSlice({
    name: 'statusBarSlice',
    initialState: {
        barStyle: 'default'
    },
    reducers: {
        updateState: (state, action) => {
            state.barStyle = action.payload;
        }
    }
})

export const {updateState} = statusBarSlice.actions;
export default statusBarSlice.reducer;