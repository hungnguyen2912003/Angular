import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HomeComponent],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService, private router: Router, private activatedRouter: ActivatedRoute){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    let id = this.activatedRouter.snapshot.paramMap.get('id');

    if(id){
      let reservation = this.reservationService.getReservation(id);

      if(reservation)
        this.reservationForm.patchValue(reservation);
    }
  }

  onSubmit() {
    if(this.reservationForm.valid){

      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRouter.snapshot.paramMap.get('id');

      if(id){
        // Update
        this.reservationService.updateReservation(id, reservation);
      }
      else{
        this.reservationService.addReservation(reservation);
      }

      this.router.navigate(['/list']);
    }
  }
}
