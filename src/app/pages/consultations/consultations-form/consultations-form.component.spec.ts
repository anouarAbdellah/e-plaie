import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsFormComponent } from './consultations-form.component';

describe('ConsultationsFormComponent', () => {
  let component: ConsultationsFormComponent;
  let fixture: ComponentFixture<ConsultationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
