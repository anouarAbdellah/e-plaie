import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModulesFormComponent } from './custom-modules-form.component';

describe('CustomModulesFormComponent', () => {
  let component: CustomModulesFormComponent;
  let fixture: ComponentFixture<CustomModulesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomModulesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomModulesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
