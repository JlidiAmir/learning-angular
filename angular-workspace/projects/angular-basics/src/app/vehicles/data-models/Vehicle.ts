import { VehicleEngine } from "./VehicleEngine";
import { VehicleEquipment } from "./VehicleEquipment";
import { VehicleTransmission } from "./VehicleTransmission";

export interface Vehicle
{

    id: number ; 
    brand: string; 
    model: string; 
    generation?: Date;
    bodyType: string;
    numberOfSeats: number;
    numberOfDoors: number;
    warantyDuration: string; 
    price: number;
    length: number;
    width: number; 
    height: number;
    weight : number;
    fuelTankCapacity : number;
    maxSpeed: number; 
    acceleration: string;
    fuelConsumption: string;
    engine: VehicleEngine;
    transmission: VehicleTransmission;
    interiorEquipments: Array<VehicleEquipment>; 
    exteriorEquipments: Array<VehicleEquipment>;
    functionalEquipments: Array<VehicleEquipment>;
    securityEquipments: Array<VehicleEquipment>;
    
}