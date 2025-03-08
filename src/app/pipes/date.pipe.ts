import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateCustom',
    standalone: true // Permite o uso direto em standalone components
})
export class DatePipeCustom implements PipeTransform {
    transform(value: string | Date, format: string = 'dd/MM/yyyy'): string {
        if (!value) {
            return 'Data não disponível';
        }

        const date = new Date(value);
        if (isNaN(date.getTime())) {
            return 'Data inválida';
        }

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        switch (format) {
            case 'dd/MM/yyyy':
                return `${day}/${month}/${year}`;
            case 'MM/dd/yyyy':
                return `${month}/${day}/${year}`;
            case 'yyyy-MM-dd':
                return `${year}-${month}-${day}`;
            case 'full': // Exemplo: "15 de Março de 2024"
                const months = [
                    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                ];
                return `${day} de ${months[date.getMonth()]} de ${year}`;
            default:
                return `${day}/${month}/${year}`; // Padrão: dd/MM/yyyy
        }
    }
}
