import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotifsListComponent } from './motifs-list.component';

describe('MotifsListComponent', () => {
  let component: MotifsListComponent;
  let fixture: ComponentFixture<MotifsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotifsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotifsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
