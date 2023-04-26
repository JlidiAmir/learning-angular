import { Component, EventEmitter, Input, Output} from '@angular/core';
// import { Vehicle } from "../vehicles/data-models/Vehicle";

@Component({
  selector: 'lca-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {


  // @Input()
  // public vehiclesList : Array<Vehicle> = new Array<Vehicle>() ;
  // @Input()
  // public title : String = "" ;
  // @Output() 
  // public selectedVehicle : EventEmitter<Vehicle> = new EventEmitter<Vehicle>();


  public constructor(){
  }

// angular OnInit lifecycle hooks
  public ngOnInit(): void
  {
 
  }


  // selectVehicle(vehicle : Vehicle){
  //   this.selectedVehicle.emit(vehicle);
  
  // }




}
