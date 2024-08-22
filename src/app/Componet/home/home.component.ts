import { Component } from '@angular/core';
import { UsersComponent } from "../users/users.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
