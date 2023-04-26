import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDataComponent } from './list-data.component';



@NgModule({
  declarations: [ListDataComponent],
  imports: [
    CommonModule
  ],
  exports:[ListDataComponent]
})
export class ListDataModule { }
