import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PondsViewComponent } from './ponds-view.component';

describe('PondsViewComponent', () => {
  let component: PondsViewComponent;
  let fixture: ComponentFixture<PondsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PondsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PondsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
