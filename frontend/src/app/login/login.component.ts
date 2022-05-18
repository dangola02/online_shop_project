import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User;
  constructor() { }

  ngOnInit(): void {
  }

  async login(user: any) {
    console.log(`user`, user);
    // post.comment = [{}]
    // post.like = 0
    // post.userId = ''
    // post.username = ''

    const result = (await axios({
      method: 'post',
      url: `http://localhost:3000/auth/login`,
      data: user
    })).data;
    console.log(result);



  }
}
