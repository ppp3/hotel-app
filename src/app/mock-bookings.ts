import {Booking} from "./booking";

export const Bookings:Booking[]=
[
    {id:1, name:"Stefan Beler", roomNumber:100, startDate: new Date(), endDate:new Date("2021-08-30")},
    {id:2, name:"Adrian Meller", roomNumber:101, startDate: new Date("2021-08-12"), endDate:new Date("2021-09-01")},
    {id:3, name:"Jens Eller", roomNumber:102, startDate: new Date("2021-08-13"), endDate:new Date("2021-09-02")},
    {id:4, name:"Stefani Reller", roomNumber:103, startDate: new Date("2021-08-14"), endDate:new Date("2021-09-03")}
];