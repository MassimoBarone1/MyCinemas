import { createSlice } from '@reduxjs/toolkit';
import Cinema from '../../models/cinema';
import CinemaRooms from '../../models/cinema_rooms';

export const cinemaSlice = createSlice({
    name: 'cinemaSlice',
    initialState: {
        cinemas: [],
        selectedCinema: {}
    },
    reducers: {
        fetchCinemas: (state) => {
            state.cinemas;
        },
        saveCinema: (state, action) => {
            state.cinemas = [...state.cinemas, {
                id: action.payload.id,
                name: action.payload.name,
                address: action.payload.address,
                openings: action.payload.openings,
                rooms: action.payload.rooms,
                roomsNumber: action.payload.rooms.length,
                selected: false
            }];
        },
        updateSelectedCinema: (state, action) => {
            if(action.payload === -1){
                state.selectedCinema = {}
            }
            else{
                const selectedCinema = state.cinemas.find(cinema => cinema.id === action.payload);
                if(selectedCinema){
                    state.selectedCinema = selectedCinema;
                }
            }
            
        }
    }
});

export const { fetchCinemas, saveCinema, updateSelectedCinema } = cinemaSlice.actions;
export default cinemaSlice.reducer;