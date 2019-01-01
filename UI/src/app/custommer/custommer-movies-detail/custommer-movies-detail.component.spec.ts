import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommerMoviesDetailComponent } from './custommer-movies-detail.component';

describe('CustommerMoviesDetailComponent', () => {
  let component: CustommerMoviesDetailComponent;
  let fixture: ComponentFixture<CustommerMoviesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustommerMoviesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustommerMoviesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
