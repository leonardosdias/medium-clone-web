import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarRoutingModule } from './topbar-routing.module';
import { TopBarComponent } from './components/topbar/topbar.component';


@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    TopBarRoutingModule
  ],
  exports: [
    TopBarComponent
  ]
})
export class TopBarModule { }
