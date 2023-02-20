import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Vehicle } from '../vehicle/Vehicle';

@Component({
  selector: 'lca-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesListComponent {

// Component Communication @Input @Output parent child relation
  @Input() vehiclesList : Array<Vehicle> = new Array<Vehicle>();
  @Input() title : string = "";
  @Output() selectedVehicle : EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

// angular OnChange lifecycle hooks 
public ngOnChanges(changes: SimpleChanges):void{
//  console.log(changes);
//  if (changes["vehiclesList"]) {
//        console.log(changes["vehiclesList"]);
         
//  }
}

// angular  DoCheck lifecycle hook
public ngDoCheck():void{
        // console.log("onchange event has been called");
        
}

  selectVehicle(vehicle : Vehicle){
    console.log(this.vehiclesList);
    
    this.selectedVehicle.emit(vehicle);
    

  }

}
