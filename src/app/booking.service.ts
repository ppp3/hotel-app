import { Injectable } from '@angular/core';
import {Booking} from './booking';
import {Bookings} from './mock-bookings';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBookings(): Booking[]
  {
    return Bookings;
  }

  deleteBooking(booking:Booking):void
  {
    let index=Bookings.indexOf(booking);
    Bookings.splice(index, 1);
  }

  getBookingById(id:number):Booking
  {
    let result=Bookings.find(booking=> booking.id===id)!;
    return(result);
  }

  addBooking(booking: Booking):void
  {
    Bookings.push(booking);
  }

  updateBooking(booking: Booking):void
  {
    let currentBooking=this.getBookingById(booking.id);
    currentBooking=booking;
  }
}
