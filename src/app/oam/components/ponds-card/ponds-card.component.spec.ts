import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PondsCardComponent } from './ponds-card.component';

describe('PondsCardComponent', () => {
  let component: PondsCardComponent;
  let fixture: ComponentFixture<PondsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PondsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PondsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
