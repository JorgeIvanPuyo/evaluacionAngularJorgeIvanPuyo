import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle/vehicle';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Array<Vehicle> = [];
  vehicleCountsByMarca: { [key: string]: number } = {};
  marcaArray: string[] = [];

  constructor(private vehicleService: VehicleService) { }
  getVehicles(){
    this.vehicleService.getvehicleList().subscribe(vehicles => {
      this.vehicles = vehicles;
      this.countVehiclesByMarca();
      console.log("conteo de vehiculos por marca");
      console.log(this.vehicleCountsByMarca);
    });
  }

  countVehiclesByMarca() {

    this.vehicleCountsByMarca = {};

    this.vehicles.forEach(vehicle => {
      if (this.vehicleCountsByMarca[vehicle.marca]) {
        this.vehicleCountsByMarca[vehicle.marca]++;
      } else {
        this.vehicleCountsByMarca[vehicle.marca] = 1;
        this.marcaArray.push(vehicle.marca);
      }
    });
  }

  ngOnInit() {
    this.getVehicles();
  }

}
