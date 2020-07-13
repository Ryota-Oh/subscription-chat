import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subscription-chat';
  login: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.login = true;
      } else {
        this.login = false;
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }

}
