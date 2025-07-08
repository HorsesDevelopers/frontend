import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PondDetailViewComponent } from './pond-detail-view.component';

describe('PondDetailViewComponent', () => {
  let component: PondDetailViewComponent;
  let fixture: ComponentFixture<PondDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PondDetailViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PondDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
