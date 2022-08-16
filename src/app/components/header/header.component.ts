import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  islogged = false;
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.isLoggedIn()){
      this.islogged = true;
    }else{
      this.islogged = false;
    }
  }

  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login']);
  }

}
