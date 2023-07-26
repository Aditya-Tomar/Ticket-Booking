import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TrainCoachInterface } from "src/interfaces/train-coach-interface";
import { TrainSeatRepository } from "src/repository/repository.service";

@Injectable({
    providedIn: 'root'
})
export class SeatsDetailService {
    bookedSeat: number[] = [];
    seatsDetail : TrainCoachInterface[] = [];
    constructor(private _trainSeatRepository: TrainSeatRepository){}

    fetchSeatsDetail(): Observable<TrainCoachInterface[]> {
      return this._trainSeatRepository.fetchSeatsDetail();
    }

    getBookedTicketsDetail() : number[] {
      return this.bookedSeat;
    }
}