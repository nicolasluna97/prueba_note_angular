import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { NewPageComponent } from './new-page/new-page.component';
import { SearchPageComponent } from './search-page/search-page.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
