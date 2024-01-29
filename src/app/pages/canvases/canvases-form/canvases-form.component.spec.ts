import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasesFormComponent } from './canvases-form.component';

describe('CanvasesFormComponent', () => {
  let component: CanvasesFormComponent;
  let fixture: ComponentFixture<CanvasesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
