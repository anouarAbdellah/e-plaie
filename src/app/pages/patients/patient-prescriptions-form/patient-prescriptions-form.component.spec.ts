import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPrescriptionsFormComponent } from './patient-prescriptions-form.component';

describe('PatientPrescriptionsFormComponent', () => {
  let component: PatientPrescriptionsFormComponent;
  let fixture: ComponentFixture<PatientPrescriptionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPrescriptionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientPrescriptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
