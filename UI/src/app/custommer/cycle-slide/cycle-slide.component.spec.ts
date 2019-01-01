import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleSlideComponent } from './cycle-slide.component';

describe('CycleSlideComponent', () => {
  let component: CycleSlideComponent;
  let fixture: ComponentFixture<CycleSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
