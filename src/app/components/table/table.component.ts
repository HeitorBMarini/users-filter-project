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
  displayedColumns: string[] = ['nome', 'dataCadastro','funcao', 'status'];
  userList: IUser[] = UserList;

  // Evento para enviar os dados do usuário selecionado para o componente pai
  @Output() userSelected = new EventEmitter<IUser>();

  // Método que emite os dados do usuário ao clicar
  selectUser(user: IUser) {
    this.userSelected.emit(user);
  }
}
