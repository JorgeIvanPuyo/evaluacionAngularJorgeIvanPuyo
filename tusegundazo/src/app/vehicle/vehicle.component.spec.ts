import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle.component';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle';

describe('AppComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehicleComponent],
      providers: [VehicleService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;

    const vehicles = [];
    for (let i = 0; i < 3; i++) {
      const vehicle = new Vehicle(
        faker.number.int(),
        faker.person.firstName(),
        faker.person.lastName(),
        faker.string.sample(),
        faker.number.int({ min: 2000, max: 2023 }), 
        faker.number.int({ min: 0, max: 100000 }), 
        faker.vehicle.color(),
        faker.image.url()
      );
      vehicles.push(vehicle);
    }

    component.vehicles = vehicles;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () => {
    const table = debug.query(By.css('table'));
    expect(table).toBeTruthy();
  })

  it('should have a table header', () => {
    const tableHeader = debug.query(By.css('thead'));
    expect(tableHeader).toBeTruthy();
  })

  it('should have 4 rows', () => {
    const tableRows = debug.queryAll(By.css('tr'));
    expect(tableRows.length).toBe(4);
  })

  it('should have 3 vehicles', () => {
    expect(component.vehicles.length).toBe(3);
  })

  it('should have a table body', () => {
    const tableBody = debug.query(By.css('tbody'));
    expect(tableBody).toBeTruthy();
  })

  it('should have a table row', () => {
    const tableRow = debug.query(By.css('tr'));
    expect(tableRow).toBeTruthy();
  })
});
