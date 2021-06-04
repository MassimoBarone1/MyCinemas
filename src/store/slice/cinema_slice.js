import { createSlice } from '@reduxjs/toolkit';
import Cinema from '../../models/cinema';
import CinemaRooms from '../../models/cinema_rooms';

export const cinemaSlice = createSlice({
    name: 'cinemaSlice',
    initialState: {
        cinemas: [],
        selectedCinema: {},
        selectedRoom: {},
        selectedShow: {},
        showTickets: []
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
                roomsNumber: action.payload.rooms.length
            }];
        },
        updateSelectedCinema: (state, action) => {
            if(action.payload === -1){
                state.selectedCinema = {}
                state.selectedRoom = {}
            }
            else{
                const selectedCinema = state.cinemas.find(cinema => cinema.id === action.payload);
                if(selectedCinema){
                    state.selectedCinema = selectedCinema;
                }
            }
            
        },
        updateSelectedRoom: (state, action) => {
            if(action.payload === -1){
                state.selectedRoom = {};
            }
            else{
                
                if(state.selectedCinema){
                    const selectedRoom = state.selectedCinema.rooms.find(room => room.id === action.payload);
                    if(selectedRoom){
                        state.selectedRoom = selectedRoom;
                    }
                }
                else{
                    console.log("NO CINEMA");
                }
                
            }
        },
        updateSelectedShow: (state, action) => {
            if(action.payload === -1){
                state.selectedShow = {};
            }
            else{
                const selectedShow = state.selectedRoom.shows.find(show => show.id === action.payload);
                if(selectedShow){
                    state.selectedShow = selectedShow;
                }
            }
        }
    }
});

export const { fetchCinemas, saveCinema, updateSelectedCinema, updateSelectedRoom , updateSelectedShow} = cinemaSlice.actions;
export default cinemaSlice.reducer;