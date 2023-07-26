import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [],
    imports: [
        ReactiveFormsModule, 
        FormsModule,
        CommonModule,
    ],
    providers: [],
    exports: [
        ReactiveFormsModule, 
        FormsModule,
        CommonModule,
    ]
})
export class SharedModule {

}