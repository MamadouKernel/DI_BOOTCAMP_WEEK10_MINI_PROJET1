import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCounterComponent } from './panel-counter.component';

describe('PanelCounterComponent', () => {
  let component: PanelCounterComponent;
  let fixture: ComponentFixture<PanelCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
