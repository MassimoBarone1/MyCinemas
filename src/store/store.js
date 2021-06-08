import { configureStore } from '@reduxjs/toolkit';
import cinemaReducer from './slice/cinema_slice';
import statusBarReducer from './slice/status_bar_slice';
export default configureStore({
    reducer: {
        cinema: cinemaReducer,
        statusBar: statusBarReducer
    }
});