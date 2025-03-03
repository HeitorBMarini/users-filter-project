import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para ngClass

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para ngClass
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
