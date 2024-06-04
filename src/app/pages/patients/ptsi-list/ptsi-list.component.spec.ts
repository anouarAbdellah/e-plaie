import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsiListComponent } from './ptsi-list.component';

describe('PtsiListComponent', () => {
  let component: PtsiListComponent;
  let fixture: ComponentFixture<PtsiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtsiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtsiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
