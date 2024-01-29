import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModulesElementsListComponent } from './custom-modules-elements-list.component';

describe('CustomModulesElementsListComponent', () => {
  let component: CustomModulesElementsListComponent;
  let fixture: ComponentFixture<CustomModulesElementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomModulesElementsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomModulesElementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
