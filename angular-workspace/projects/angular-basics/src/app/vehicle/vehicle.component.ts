import { Component } from '@angular/core';
import { Vehicle } from './Vehicle';
import {DummyData} from "./DummyData"

@Component({
  selector: 'lca-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

public numberOfVehicles: number = 0;  
public vehiclesList : Array<Vehicle> = new Array<Vehicle>();


public constructor(){
}

// angular lifecycle hooks
ngOnInit(): any 
{
 this.vehiclesList = DummyData;
}

public addVehicle(): void
{
  this.numberOfVehicles+= 1;
  this.vehiclesList[this.numberOfVehicles]={
    id: 515 ,
    brand: "BMW", 
    model: "M5",
    generation: new Date("12-05-2022"),
    bodyType: "coupe",
    numberOfSeats: 4,
    numberOfDoors: 2,
    warantyDuration: "5 years or 1000000KM",
    price: 1000000,
    length: 4,
    width: 3, 
    height: 1.70,
    weight : 1200,
    fuelTankCapacity : 5,
    maxSpeed: 360, 
    acceleration: "0 to 100 in 2.6",
    fuelConsumption: "2 liters every 0.5 kilometer",
    engine: {
      id:1,
      fuelType:"Gas",
      engineDisplacement: 2,
      horsePower: 480 ,
      taxHorsePower: 20, 
      numberOfCylinders: 6,
      torque: "500 @ 25000 RPM"
    },
    transmission: {
      id: 250155,
      gearBoxType: "Manuel",
      numberOfGears: 6,
      transmissionType: "Traction"
    },
    interiorEquipments: [], 
    exteriorEquipments: [],
    functionalEquipments: [],
    securityEquipments: [],
  }
}




}
