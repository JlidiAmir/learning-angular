import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vehicle } from '../../data-models/Vehicle';


@Component({
  selector: 'lca-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent {
   
  @Input()
  public vehicle!: Vehicle;
  @Output()
  public selectedVehicle: EventEmitter<Vehicle> = new EventEmitter<Vehicle>(); 

  public constructor()
  {

  }

  public consultVehicleDetails(vehicle: Vehicle)
  {
    this.selectedVehicle.emit(vehicle);
  }

}
