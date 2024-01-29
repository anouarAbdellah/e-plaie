import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentsListComponent } from './antecedents-list.component';

describe('AntecedentsListComponent', () => {
  let component: AntecedentsListComponent;
  let fixture: ComponentFixture<AntecedentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntecedentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntecedentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
