import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private authservice: AuthService,
    private router: Router
  ){}

  get user () {
    return this.authservice.user;
  }

  logout(){
    this.authservice.logoutUser().subscribe({
      next:(data) => {
        console.log(data);

        this.router.navigateByUrl('/login')
      },
      error:(err) => {
        console.error(err);
      },
      complete:() => {
        console.log('Se ejecuta el Logout');
      }
    })
  }

}
