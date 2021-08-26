import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    if (this.router.url!='create')
    {
      const id=Number(this.activatedRoute.snapshot.paramMap.get('id'));
      var bookingById =Bookings.find(booking=> booking.id===id)!;
      this.booking=bookingById;
    }
    
  }

  save():void{
    let bookingById =Bookings.find(booking=> booking.id===this.booking.id);
    if ((bookingById==null ) ||(bookingById==undefined))
    {
      Bookings.push(this.booking);
    }
    else
    {
      bookingById=this.booking;
    }
    
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
