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
                state.selectedShow = {}
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
                state.selectedShow = {}
            }
            else{
                
                if(state.selectedCinema){
                    const selectedRoom = state.selectedCinema.rooms.find(room => room.id === action.payload);
                    if(selectedRoom){
                        state.selectedRoom = selectedRoom;
                    }
                }
                
            }
        },
        updateSelectedShow: (state, action) => {
            if(action.payload === -1){
                state.selectedShow = {};
            }
            else{
                
                if(state.selectedRoom.shows){
                    const selectedShow = state.selectedRoom.shows.find(show => show.id === action.payload);
                    if(selectedShow){
                        state.selectedShow = selectedShow;
                    }
                }
                
            }
        },
        buyTicket: (state, action) => {
            
            // Update selected show
            const remainingPlaces = parseInt(state.selectedShow.remainingPlaces) - parseInt(action.payload.ticketQty);
            let updatedShow = state.selectedShow;
            updatedShow.remainingPlaces = remainingPlaces;
            state.selectedShow = updatedShow;
            
            // Update tickets
            state.showTickets = [...state.showTickets, {
                id: action.payload.id,
                showId: action.payload.showId,
                qty: action.payload.ticketQty
            }];

            // Update selected room
            const selectedShowInRoomIdx = state.selectedRoom.shows.findIndex(show => show.id === action.payload.showId);
            if(selectedShowInRoomIdx > -1){
                state.selectedRoom.shows[selectedShowInRoomIdx].remainingPlaces = remainingPlaces;
            }

            // update cinema data
            const selectedCinemaRoomIndex = state.selectedCinema.rooms.findIndex(room => room.id === state.selectedRoom.id);
            if(selectedCinemaRoomIndex > -1){
                state.selectedCinema.rooms[selectedCinemaRoomIndex] = state.selectedRoom;
            }

            // update cinemas
            const cinemaIdx = state.cinemas.findIndex(cinema => cinema.id === state.selectedCinema.id);
            if(cinemaIdx > -1){
                state.cinemas[cinemaIdx] = state.selectedCinema;
            }

        }
    }
});

export const { fetchCinemas, saveCinema, updateSelectedCinema, updateSelectedRoom , updateSelectedShow, buyTicket} = cinemaSlice.actions;
export default cinemaSlice.reducer;