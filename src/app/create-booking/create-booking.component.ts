import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
//import { Bookings } from '../mock-bookings';
import { Router, ActivatedRoute } from '@angular/router';
import {BookingService} from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  booking :Booking={
    id:1,
    name: "dsfs",
    roomNumber:6,
    startDate:new Date(),
    endDate: new Date()
  }

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private bookingService:BookingService ) { 

  }

  ngOnInit(): void {
    if (this.router.url!='create')
    {
      const id=Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.bookingService.getBookingById(id).subscribe(result=>{
        this.booking=result;    
      });
      
    }
    
  }

  save():void{
    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  dateChanged(event:Event, isStart: boolean)
  {
      var val=(event.target as HTMLInputElement).value;
      if (isStart)
      {
        this.booking.startDate=new Date(val);
      }
      else
      {
        this.booking.endDate=new Date(val);
      }
  }
}
