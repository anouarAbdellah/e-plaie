import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAntecedentsFormComponent } from './patient-antecedents-form.component';

describe('PatientAntecedentsFormComponent', () => {
  let component: PatientAntecedentsFormComponent;
  let fixture: ComponentFixture<PatientAntecedentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAntecedentsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAntecedentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
