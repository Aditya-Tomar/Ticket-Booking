import { Injectable } from "@angular/core";
import { SeatsDetailService } from "./seats-detail.service";
import { TrainSeatRepository } from "src/repository/repository.service";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TicketBookingService {

    constructor(private _seatsDetailService: SeatsDetailService, private _trainSeatRepository: TrainSeatRepository){}

    bookTicket({ name, noOfTickets }: { name: string, noOfTickets: number }): Observable<number[]> {
        console.log(name, noOfTickets);
        return this._trainSeatRepository.bookTicket(name, noOfTickets).pipe(
            tap(data => {
                this._seatsDetailService.bookedSeat = data;
            }));
    }
}