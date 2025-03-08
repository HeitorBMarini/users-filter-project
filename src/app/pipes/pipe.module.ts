import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone.pipe";
import { AddressPipe } from "./address.pipe";
import { StatusPipe } from "./status.pipe"; // Importe o novo Pipe

@NgModule({
    declarations: [],
    imports: [PhonePipe, AddressPipe, StatusPipe], // Standalone pipes devem estar aqui
    exports: [PhonePipe, AddressPipe, StatusPipe]
})
export class PipesModule { }
