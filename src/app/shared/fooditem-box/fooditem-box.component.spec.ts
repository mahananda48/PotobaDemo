import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemBoxComponent } from './fooditem-box.component';

describe('FooditemBoxComponent', () => {
  let component: FooditemBoxComponent;
  let fixture: ComponentFixture<FooditemBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooditemBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooditemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
