import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
})
export class MenubarComponent {

  constructor(
    private router: Router
  ) { }

  public navigateCharacters(){
    this.router.navigate(['characters']);
  }

  public navigateCombat(){
    this.router.navigate(['combat']);
  }

  public navigateDetail(){
    //
  }

  public navigateHome(){
    this.router.navigate(['home']);
  }
}
