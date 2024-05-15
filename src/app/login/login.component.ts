import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public userImg!:string;
  public userName!:string;
  public userSurname!:string;
  public userEmail!:string;
  public userAge!:string;
  public userCard!:string;

}
