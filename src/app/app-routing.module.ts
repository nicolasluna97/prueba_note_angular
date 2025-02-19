import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HeroesModule } from './heroes/heroes.module';
import { Error404PageComponent } from './heroes/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import ('./auth/auth.module').then( m =>AuthModule),
  },
  {
    path:'heroes',
    loadChildren: () => import ('./heroes/heroes.module').then( m =>HeroesModule),
  },
  {
    path:'404',
    component: Error404PageComponent
  },
  {
    path:'',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
