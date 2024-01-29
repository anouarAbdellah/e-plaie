import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilansFormComponent } from './bilans-form.component';

describe('BilansFormComponent', () => {
  let component: BilansFormComponent;
  let fixture: ComponentFixture<BilansFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilansFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilansFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
