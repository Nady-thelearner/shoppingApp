import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dropDownDirective } from './dropDown.directive';



@NgModule({
  declarations: [  dropDownDirective],
  imports: [
    CommonModule
  ],
  exports: [dropDownDirective],
})
export class SharedModule { }
