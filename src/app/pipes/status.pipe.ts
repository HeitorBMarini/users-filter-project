import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'status',
    standalone: true // Permite o uso direto em standalone components
})
export class StatusPipe implements PipeTransform {
    transform(value: any): string {
        if (!value || typeof value !== 'object') {
            return 'Status desconhecido';
        }

        return value.online ? "✅ Ativo" : "❌ Inativo";
    }
}
