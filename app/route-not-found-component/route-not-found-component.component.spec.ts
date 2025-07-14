import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteNotFoundComponentComponent } from './route-not-found-component.component';

describe('RouteNotFoundComponentComponent', () => {
  let component: RouteNotFoundComponentComponent;
  let fixture: ComponentFixture<RouteNotFoundComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteNotFoundComponentComponent]
    });
    fixture = TestBed.createComponent(RouteNotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
