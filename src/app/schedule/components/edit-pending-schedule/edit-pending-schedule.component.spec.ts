import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPendingScheduleComponent } from './edit-pending-schedule.component';

describe('EditPendingScheduleComponent', () => {
  let component: EditPendingScheduleComponent;
  let fixture: ComponentFixture<EditPendingScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPendingScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPendingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
