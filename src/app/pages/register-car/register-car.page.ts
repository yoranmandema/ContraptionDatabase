import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';
import * as Countries from 'i18n-iso-countries';

@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.page.html',
  styleUrls: ['./register-car.page.scss'],
})
export class RegisterCarPage implements OnInit {


  public form;
  public isSubmitted: boolean = false;
  public countries;

  get controls () {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService
  ) { 
    this.countries = Countries;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required]],
      country: ['', [Validators.required]],
      creation_year: ['', [Validators.required, Validators.pattern(/\d+/)]],
      engine: ['', [Validators.required, Validators.maxLength(100)]],
      weight: ['', [Validators.required, Validators.pattern(/\d+/)]],
      type: ['', [Validators.required, Validators.maxLength(45)]],
      class: ['', [Validators.required, Validators.maxLength(45)]],
      drivetrain: ['', [Validators.required]],
      engine_position: ['', [Validators.required, Validators.maxLength(45)]],
      gearbox_type: ['', [Validators.required, Validators.maxLength(45)]],
      fuel_type: ['', [Validators.required, Validators.maxLength(45)]],
      topspeed: ['', [Validators.required, Validators.maxLength(45), Validators.pattern(/\d+/)]],
      horsepower: ['', [Validators.required, Validators.maxLength(45), Validators.pattern(/\d+/)]],
      torque: ['', [Validators.required, Validators.maxLength(45), Validators.pattern(/\d+/)]],
    })
  }

  public register (data) {
    this.vehicleService.createVehicle(data).subscribe(res => {
      console.log(res);
    })
  }

  public submitForm () {
    this.isSubmitted = true;

    if (!this.form.valid) {
      return false;
    } else {
      this.register(this.form.value);
    }
  }
}
