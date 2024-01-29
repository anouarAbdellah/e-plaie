import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtisFormComponent } from './ptis-form.component';

describe('PtisFormComponent', () => {
  let component: PtisFormComponent;
  let fixture: ComponentFixture<PtisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
