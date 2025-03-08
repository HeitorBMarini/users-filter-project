import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'address',
    standalone: true // Permite o uso direto em standalone components
})
export class AddressPipe implements PipeTransform {
    transform(value: any): string {
        if (!value || typeof value !== 'object') {
            return 'Endereço não disponível';
        }

        const { rua, numero, cidade, estado, pais } = value;
        return `${rua}, Nº ${numero} - ${cidade}/${estado}, ${pais}`;
    }
}
