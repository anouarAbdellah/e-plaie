import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotifsFormComponent } from './motifs-form.component';

describe('MotifsFormComponent', () => {
  let component: MotifsFormComponent;
  let fixture: ComponentFixture<MotifsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotifsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotifsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
