import { Component, Input } from '@angular/core';
import { Vehicle } from '../vehicle/Vehicle';

@Component({
  selector: 'lca-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent {

  @Input() vehiclesList : Array<Vehicle> = new Array<Vehicle>();

}
