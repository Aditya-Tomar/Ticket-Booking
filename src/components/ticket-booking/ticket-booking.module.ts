import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketBookingComponent } from "./ticket-booking.component";
import { SharedModule } from "src/shared/shared.module";


const routes: Routes = [
    {
        path: '',
        component: TicketBookingComponent
    }
]


@NgModule({
    declarations: [TicketBookingComponent],
    imports: [ 
        SharedModule, 
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class TicketBookingModule {

}