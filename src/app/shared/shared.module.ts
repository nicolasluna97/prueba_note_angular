import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from '../heroes/pages/error404-page/error404-page.component';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Error404PageComponent
  ]
})
export class SharedModule { }
