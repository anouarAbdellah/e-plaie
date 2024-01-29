import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModulesElementsFormComponent } from './custom-modules-elements-form.component';

describe('CustomModulesElementsFormComponent', () => {
  let component: CustomModulesElementsFormComponent;
  let fixture: ComponentFixture<CustomModulesElementsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomModulesElementsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomModulesElementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
