import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookedTicketsComponent } from "./booked-tickets.component";
import { SharedModule } from "src/shared/shared.module";


const routes: Routes = [
    {
        path: '',
        component: BookedTicketsComponent
    }
]


@NgModule({
    declarations: [BookedTicketsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class BookedTicketsModule {

}