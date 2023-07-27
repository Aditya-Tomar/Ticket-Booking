import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TrainSeatRepository {
    private url = "https://ttbookingbe.netlify.app/api/train";
    constructor(private _httpService: HttpClient){}

    // This will fetch the train seats detail.
    fetchSeatsDetail(): Observable<any> {
        return this._httpService.get(`${this.url}/seats/detail`);
    }

    // This will send req to book the tickets.
    bookTicket( noOfTickets: number): Observable<any> {
        const data = { noOfTickets };
        return this._httpService.post(`${this.url}/ticket/booking`, data );
    }
}