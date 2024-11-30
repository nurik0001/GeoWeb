import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlossaryRoutingModule } from './glossary-routing.module';
import { GlossaryComponent } from './glossary.component';


@NgModule({
  declarations: [
    GlossaryComponent
  ],
  imports: [
    CommonModule,
    GlossaryRoutingModule
  ]
})
export class GlossaryModule { }
