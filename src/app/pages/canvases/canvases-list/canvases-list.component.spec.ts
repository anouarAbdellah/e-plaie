import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasesListComponent } from './canvases-list.component';

describe('CanvasesListComponent', () => {
  let component: CanvasesListComponent;
  let fixture: ComponentFixture<CanvasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
