import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa para usar *ngFor
import { IUser } from '../../interfaces/user/user.interface';
import { UserList } from '../../data/user-list';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule], // Importa para o Angular reconhecer *ngFor
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['nome', 'dataCadastro', 'funcao' ,'status'];
  userList: IUser[] = UserList;

  getStatus(user: IUser): string {
    return user.status.online ? "Ativo" : "Inativo";
  }
}
