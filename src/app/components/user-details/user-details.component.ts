import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user/user.interface';
import { EmptyValuePipe } from "../../pipes/empty-value.pipe";
import { PhonePipe } from "../../pipes/phone.pipe";
import { StatusPipe } from "../../pipes/status.pipe";
import { DatePipeCustom } from "../../pipes/date.pipe";
import { AddressPipe } from "../../pipes/address.pipe";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, EmptyValuePipe, PhonePipe, StatusPipe, DatePipeCustom, AddressPipe],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  isSidebarOpen: boolean = false;
  @Input() user: IUser | null = null;

  // Método para abrir manualmente
  openSidebar(user?: IUser | null) {
    this.user = user ?? this.user; // Mantém o usuário anterior se `user` for undefined
    this.isSidebarOpen = true; 
  }

  // Método para fechar manualmente
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
