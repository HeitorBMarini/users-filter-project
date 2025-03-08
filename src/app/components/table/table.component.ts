import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user/user.interface';
import { UserList } from '../../data/user-list';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['nome', 'dataCadastro', 'funcao', 'status'];
  userList: IUser[] = UserList;
  filteredList: IUser[] = [...this.userList]; // Lista filtrada
  selectedUser: IUser | null = null; // Usuário selecionado

  @Output() userSelected = new EventEmitter<IUser | null>(); // Permite emitir null

  getStatus(user: IUser): string {
    return user.status.online ? "Ativo" : "Inativo";
  }

  // Método para selecionar um usuário
  selectUser(user: IUser) {
    this.selectedUser = user;
    this.userSelected.emit(user);
  }

  // Método para aplicar filtros sem perder a seleção do usuário
  applyFilters(filters: { nome: string; dataCadastro: string; status: string }) {
    this.filteredList = this.userList.filter(user => {
      const matchNome = filters.nome ? user.nome.toLowerCase().includes(filters.nome.toLowerCase()) : true;
      const matchData = filters.dataCadastro ? user.dataCadastro.startsWith(filters.dataCadastro) : true;
      const matchStatus = filters.status
        ? (filters.status === 'Ativo' && user.status.online) ||
          (filters.status === 'Inativo' && !user.status.online)
        : true;

      return matchNome && matchData && matchStatus;
    });

    // Se o usuário selecionado for filtrado, removemos a seleção
    if (this.selectedUser && !this.filteredList.includes(this.selectedUser)) {
      this.selectedUser = null;
      this.userSelected.emit(null); // Agora permitido
    }
  }
}
