import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentAppComponent } from './appointment-app.component';

describe('AppointmentAppComponent', () => {
  let component: AppointmentAppComponent;
  let fixture: ComponentFixture<AppointmentAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
