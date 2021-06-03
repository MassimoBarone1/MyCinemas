import CinemaRooms from './cinema_rooms';
class Cinema {
    constructor(id, name, address, openingHours, cinemaRooms){
        this.id = id;
        this.name = name;
        this.address = address;
        this.openingHours = openingHours;
        this.cinemaRooms = cinemaRooms;
    }
};
export default Cinema;