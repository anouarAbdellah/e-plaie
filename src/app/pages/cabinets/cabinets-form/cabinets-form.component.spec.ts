import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetsFormComponent } from './cabinets-form.component';

describe('CabinetsFormComponent', () => {
  let component: CabinetsFormComponent;
  let fixture: ComponentFixture<CabinetsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
