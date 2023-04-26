import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { VehiclesListComponent } from '../../vehicles-list/vehicles-list.component';

@Component({
  selector: 'lca-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  // public title: string = 'angular-basics';
  // public role: string = "Admin";

  // @ViewChild("user", {read: ViewContainerRef}) 
  // public vcr!: ViewContainerRef; 

  // @ViewChild("div_id",{static:true})
  // public div!: ElementRef ;

  // public ngAfterViewInit(){
  //   const componentRef = this.vcr.createComponent(VehiclesListComponent);
  //   const elementRef = this.div.nativeElement.innerText = "hello from app for div ";

  // }  

}
