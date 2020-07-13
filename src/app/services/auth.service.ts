import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  authSubject = new Subject<any>();
  auth$ = this.authSubject.asObservable();

  constructor(
    private router: Router,
    private afauth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  create(email: string, password: string): void {
    this.afauth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.router.navigate(['/']);
      });
  }

}
