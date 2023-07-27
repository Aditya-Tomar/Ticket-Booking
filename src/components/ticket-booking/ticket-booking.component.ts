import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketBookingService } from 'src/services/ticket-booking.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent {

  form: FormGroup = this._fb.group({
    noOfTickets: [null, [Validators.required, Validators.max(7)]]
  });
  isLoading:boolean = false;

  constructor( private _fb: FormBuilder, private _ticketBookingService: TicketBookingService, private _router: Router) {}
//return input ticket field control
  get ticketfield (): FormControl {
    return this.form.get('noOfTickets') as FormControl;
  }

// To check the key pressed must be a number key in range 1 - 7 or backspace key.
  public isNumber($event: KeyboardEvent): boolean {
    if( $event.key > '0' && $event.key <'8' || $event.key === 'Backspace'){
      return true;
    }
    return false;
  }

  // This method will send req to book tickets
  public bookTickets(){

    if(this.form.valid){
      const value = this.form.value;
      this.isLoading=true;

      this._ticketBookingService.bookTicket({ ...value }).subscribe(() =>{
        this._router.navigateByUrl("/booked-ticket");
        this.isLoading = false;  
      });
    }
  }

}
