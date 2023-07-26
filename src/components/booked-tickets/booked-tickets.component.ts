import { Component } from '@angular/core';
import { TrainCoachInterface } from 'src/interfaces/train-coach-interface';
import { SeatsDetailService } from 'src/services/seats-detail.service';


@Component({
  selector: 'app-booked-tickets',
  templateUrl: './booked-tickets.component.html',
  styleUrls: ['./booked-tickets.component.scss']
})
export class BookedTicketsComponent {

  public bookedSeats: any[] =[];
  public trainCoachseats: TrainCoachInterface [] = [];
  public isLoading: boolean = true;
  constructor(private _seatsDetailService: SeatsDetailService){}

  // During component initialization it will fetch booked ticket data.
  ngOnInit(): void {
    this.isLoading = true;
    // This will fetch all the train data like coachName, seats list.
    // Refer to TrainCoachInterface interface for more field detail.
    this._seatsDetailService.fetchSeatsDetail().subscribe( ( seatsDetail ) => {
      this.trainCoachseats = seatsDetail;
      this.isLoading = false;
    });
    // This will fetch the number of ticket booked by s/he.
    this.bookedSeats = this._seatsDetailService.getBookedTicketsDetail();
  }

}
