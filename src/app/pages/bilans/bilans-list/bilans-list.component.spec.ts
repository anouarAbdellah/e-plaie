import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilansListComponent } from './bilans-list.component';

describe('BilansListComponent', () => {
  let component: BilansListComponent;
  let fixture: ComponentFixture<BilansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilansListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
