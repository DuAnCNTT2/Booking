import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldcinemaComponent } from './goldcinema.component';

describe('GoldcinemaComponent', () => {
  let component: GoldcinemaComponent;
  let fixture: ComponentFixture<GoldcinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldcinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldcinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
