import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatMainComponent } from './combat-main/combat-main.component';


const routes: Routes = [
  {
    path: '',
    component: CombatMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombatRoutingModule {}
