import { Injectable } from "@angular/core";
import { SeatsDetailService } from "./seats-detail.service";
import { TrainSeatRepository } from "src/repository/repository.service";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TicketBookingService {

    constructor(private _seatsDetailService: SeatsDetailService, private _trainSeatRepository: TrainSeatRepository){}

    bookTicket({ noOfTickets }: { noOfTickets: number }): Observable<number[]> {
        return this._trainSeatRepository.bookTicket(noOfTickets).pipe(
            tap(data => {
                this._seatsDetailService.bookedSeat = data;
            }));
    }
}