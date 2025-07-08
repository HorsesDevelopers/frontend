import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePendingComponent } from './schedule-pending.component';

describe('SchedulePendingComponent', () => {
  let component: SchedulePendingComponent;
  let fixture: ComponentFixture<SchedulePendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulePendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulePendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
