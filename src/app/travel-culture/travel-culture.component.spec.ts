import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCultureComponent } from './travel-culture.component';

describe('TravelCultureComponent', () => {
  let component: TravelCultureComponent;
  let fixture: ComponentFixture<TravelCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
