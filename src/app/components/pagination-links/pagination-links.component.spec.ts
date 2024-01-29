import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationLinksComponent } from './pagination-links.component';

describe('PaginationLinksComponent', () => {
  let component: PaginationLinksComponent;
  let fixture: ComponentFixture<PaginationLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
