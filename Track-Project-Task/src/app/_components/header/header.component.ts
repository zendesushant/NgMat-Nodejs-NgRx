import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_authentications/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private appAuthService:AuthenticationService ) { }

  ngOnInit(): void {
  }

  onLogout()
  {
      this.appAuthService.logout();
  }
}
