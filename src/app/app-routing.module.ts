import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "ticket-booking",
    pathMatch: "full"
  },
  {
    path: "ticket-booking",
    loadChildren: () => import("../components/ticket-booking/ticket-booking.module").then(m => m.TicketBookingModule),
  },
  {
    path: "booked-ticket",
    loadChildren: () => import("../components/booked-tickets/booked-tickets.module").then(m => m.BookedTicketsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
