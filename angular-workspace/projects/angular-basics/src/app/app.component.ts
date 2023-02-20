import { Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import { VehicleComponent } from './vehicle/vehicle.component';

@Component({
  selector: 'lca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'angular-basics';
  public role: string = "Admin";

  @ViewChild("user", {read: ViewContainerRef}) 
  public vcr!: ViewContainerRef; 

  @ViewChild("div_id",{static:true})
  public div!: ElementRef ;

  public ngAfterViewInit(){
    const componentRef = this.vcr.createComponent(VehicleComponent);
    const elementRef = this.div.nativeElement.innerText = "hello from app for div ";

  }

}
