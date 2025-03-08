import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phone'
})

export class PhonePipe implements PipeTransform {
    transform(value: string): string {
        const ddd = value.slice(0, 2);
        const part1 = value.slice(2, 7);
        const part2 = value.slice(7, 11);
        return `(${ddd}) ${part1}-${part2}`;
    }
}