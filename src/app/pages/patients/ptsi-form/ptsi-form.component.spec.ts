import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsiFormComponent } from './ptsi-form.component';

describe('PtsiFormComponent', () => {
  let component: PtsiFormComponent;
  let fixture: ComponentFixture<PtsiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtsiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtsiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
