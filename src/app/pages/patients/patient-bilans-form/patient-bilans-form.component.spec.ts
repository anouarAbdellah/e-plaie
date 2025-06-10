import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBilansFormComponent } from './patient-bilans-form.component';

describe('PatientBilansFormComponent', () => {
  let component: PatientBilansFormComponent;
  let fixture: ComponentFixture<PatientBilansFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientBilansFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientBilansFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
