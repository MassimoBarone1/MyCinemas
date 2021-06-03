import { configureStore } from '@reduxjs/toolkit';
import cinemaReducer from './slice/cinema_slice';
export default configureStore({
    reducer: {
        cinema: cinemaReducer
    }
});