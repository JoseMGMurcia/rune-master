import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersMainComponent } from './characters-main/characters-main.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutinModule {}
