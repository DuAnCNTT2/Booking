import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommerTheaterComponent } from './custommer-theater.component';

describe('CustommerTheaterComponent', () => {
  let component: CustommerTheaterComponent;
  let fixture: ComponentFixture<CustommerTheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustommerTheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustommerTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
