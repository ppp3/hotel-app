import { Injectable } from '@angular/core';
import {Booking} from './booking';
import {Bookings} from './mock-bookings';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }
  bookingsUrl:string="/api/bookings";

  getBookings(): Observable<Booking[]>
  {

    let result=this.httpClient.get<Booking[]>(this.bookingsUrl)
    return result;
  }

  deleteBooking(booking:Booking):Observable<Booking>
  {
    let result=this.httpClient.delete<Booking>(this.bookingsUrl+"/"+booking.id);
    return result;
  }

  getBookingById(id:number):Observable<Booking>
  {
    let result=this.httpClient.get<Booking>(this.bookingsUrl+"/"+id)
    return(result);
  }

  addBooking(booking: Booking):Observable<Booking>
  {
    let response=this.httpClient.post<Booking>(this.bookingsUrl,booking);
    return response;
  }

}
