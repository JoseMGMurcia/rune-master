import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/+home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./modules/+characters/characters.module').then( m => m.CharactersModule)
  },
  {
    path: 'combat',
    loadChildren: () => import('./modules/+combat/combat.module').then( m => m.CombatModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
