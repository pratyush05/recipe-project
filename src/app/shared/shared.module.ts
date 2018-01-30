import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ],
  declarations: [
    DropdownDirective
  ]
})
export class SharedModule { }
