import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user/user.interface';
import { PipesModule } from '../../pipes/pipe.module';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, PipesModule], // Adicione o PipesModule aqui
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  isSidebarOpen: boolean = false;

  // Recebe os dados do usuário da tabela
  @Input() user: IUser | null = null;

  // Método chamado ao receber um novo usuário
  openSidebar(user: IUser) {
    this.user = user;
    this.isSidebarOpen = true;
  }

  // Fecha o sidebar
  toggleSidebar() {
    this.isSidebarOpen = false;
  }
  
}

