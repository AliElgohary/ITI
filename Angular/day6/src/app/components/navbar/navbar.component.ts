import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit  {
  userLog!: boolean;

  constructor(private authServ: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authServ.getUserState().subscribe({
      next: (state) => {
        this.userLog = state;
      }
    });
  }

  changeUserState(): void {
    if (this.userLog) {
      this.router.navigate(['/login']);
      this.authServ.logout();
    } else {
      this.router.navigate(['/cart']);
      this.authServ.login('user', 'password');
    }
  }
}
