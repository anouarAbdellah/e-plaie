import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtisListComponent } from './ptis-list.component';

describe('PtisListComponent', () => {
  let component: PtisListComponent;
  let fixture: ComponentFixture<PtisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
