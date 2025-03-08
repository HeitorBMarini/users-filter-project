import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user/user.interface';
import { PhonePipe } from '../../pipes/phone.pipe';
import { AddressPipe } from '../../pipes/address.pipe';
import { StatusPipe } from '../../pipes/status.pipe';
import { DatePipeCustom } from '../../pipes/date.pipe';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, PhonePipe, AddressPipe, StatusPipe, DatePipeCustom], // Importação direta dos pipes
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  isSidebarOpen: boolean = false;

  @Input() user: IUser | null = null;

  openSidebar(user: IUser) {
    this.user = user;
    this.isSidebarOpen = true;
  }

  toggleSidebar() {
    this.isSidebarOpen = false;
  }
}
