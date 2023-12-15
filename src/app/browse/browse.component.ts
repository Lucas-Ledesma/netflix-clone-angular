import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
})
export class BrowseComponent {
  auth = inject(AuthService);

  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;

  userImage = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}
