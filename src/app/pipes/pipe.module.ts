import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone.pipe"; // Importe o Pipe corretamente

@NgModule({
    declarations: [PhonePipe], // Declare o Pipe
    exports: [PhonePipe] // Exporte para uso nos componentes
})
export class PipesModule { }
