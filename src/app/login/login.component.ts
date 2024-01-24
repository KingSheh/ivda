import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signIn(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.authService.signIn(this.username, this.password).subscribe((isAuthenticated) => {
      console.log('Is Authenticated:', isAuthenticated);
      if (isAuthenticated) {
        this.router.navigate(['/upload']);
      } else { alert("invalid credentials.. try again") }
    });
  }

}
