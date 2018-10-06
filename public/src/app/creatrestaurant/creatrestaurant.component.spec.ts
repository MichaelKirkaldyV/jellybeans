import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatrestaurantComponent } from './creatrestaurant.component';

describe('CreatrestaurantComponent', () => {
  let component: CreatrestaurantComponent;
  let fixture: ComponentFixture<CreatrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatrestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
