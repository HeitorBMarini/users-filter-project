import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone.pipe";
import { AddressPipe } from "./address.pipe";

@NgModule({
    declarations: [],
    imports: [PhonePipe, AddressPipe], // Standalone pipes devem estar aqui
    exports: [PhonePipe, AddressPipe]
})
export class PipesModule { }
