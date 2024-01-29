import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModulesListComponent } from './custom-modules-list.component';

describe('CustomModulesListComponent', () => {
  let component: CustomModulesListComponent;
  let fixture: ComponentFixture<CustomModulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomModulesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomModulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
