import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  isSidebarOpen: boolean = false;

  @Input() user: IUser | null = null; // Permite receber null

  openSidebar(user: IUser | null) {
    this.user = user;
    this.isSidebarOpen = !!user; // Se user for null, fecha o sidebar
  }

  toggleSidebar() {
    this.isSidebarOpen = false;
  }
}
