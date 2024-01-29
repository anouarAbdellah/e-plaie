import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoundsFormComponent } from './wounds-form.component';

describe('WoundsFormComponent', () => {
  let component: WoundsFormComponent;
  let fixture: ComponentFixture<WoundsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoundsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoundsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
