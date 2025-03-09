import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true, // Componente independente
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  imports: [CommonModule, FormsModule] // 🔥 Certifique-se de que os módulos estão corretos
})
export class FilterComponent {
  nome: string = '';
  dataCadastro: string = '';
  status: string = '';

  @Output() filterChanged = new EventEmitter<{ nome: string; dataCadastro: string; status: string }>();

  applyFilter() {
    this.filterChanged.emit({
      nome: this.nome.trim().toLowerCase(),
      dataCadastro: this.dataCadastro,
      status: this.status
    });
  }
}
