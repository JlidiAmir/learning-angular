import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Vehicle } from './Vehicle';
import {DummyData} from "./DummyData"
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'lca-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

public numberOfVehicles: number = 3;  
public vehiclesList : Array<Vehicle> = new Array<Vehicle>();
public selectedVehicle!: Vehicle; 
// static property makes the component available in the parent component OnInit lifecycle hook must be used
// carfulley because if the child component contains asynchronous code then the parent component will
// get stuck
// ViewChild component communication 
// @ViewChild(HeaderComponent, {static:true}) headerComponent!: HeaderComponent ; 

@ViewChild(HeaderComponent)
public headerComponent!: HeaderComponent ; 

@ViewChildren(HeaderComponent)
public headerComponentList!: QueryList<HeaderComponent>; 


public constructor(){
}

// angular OnInit lifecycle hooks
public ngOnInit(): void
{
  // checking the static = false property on the ViewChild decorator
  // console.log(this.headerComponent);
 this.vehiclesList = DummyData;
}
//angular AfterViewInit lifecycle hook
public ngAfterViewInit(){
this.headerComponent.title = "Header Title";
this.headerComponentList.last.title = "last header"
this.headerComponentList.forEach((item)=>item.title="header");

}
//angular AfterViewChecked lifecycle hook
public ngAfterViewChecked(){
  this.headerComponent.title = "first header";

     
}

public setSelectedVehicle(vehicle : Vehicle):void{
    this.selectedVehicle=vehicle;   
}


public addVehicle(): void
{
  this.numberOfVehicles+= 1;
  const bmwVehicle: Vehicle = {
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
  };
  this.vehiclesList = new Array<Vehicle>(...this.vehiclesList, bmwVehicle)
  
  
}




}
