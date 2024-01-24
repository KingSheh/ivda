import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //This is a private BehaviorSubject that holds the current authentication status. initialized with false as the default value.
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  //observable that we can subscribe to in order to receive updates on the authentication status.
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();


  constructor(private router: Router) { }

  /* Simulates a sign-in operation. It checks if the provided username and password match a hardcoded value. 
  If successful, it updates the isAuthenticatedSubject and returns an observable with a delay 
  (simulating an asynchronous operation).*/
  signIn(username: string, password: string): Observable<boolean> {
    // Implement our authentication logic here
    // This can involve making HTTP requests to your backend which we will probably use cognito for

    const isAuthenticated = username === 'user' && password === 'password';
    this.isAuthenticatedSubject.next(isAuthenticated);
    return of(isAuthenticated).pipe(delay(1000)); //simulating asynch once we add DB
  }

  //signOut(): void: Simulates a sign-out operation by updating the isAuthenticatedSubject to false.

  signOut(): void {
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  //Returns the current authentication status.
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

}
