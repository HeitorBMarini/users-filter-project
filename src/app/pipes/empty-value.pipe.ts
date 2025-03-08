import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'emptyValue',
    standalone: true // Permite o uso direto em standalone components
})
export class EmptyValuePipe implements PipeTransform {
    transform(value: any, defaultText: string = 'Não informado'): string {
        if (value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
            return defaultText;
        }
        return value;
    }
}
