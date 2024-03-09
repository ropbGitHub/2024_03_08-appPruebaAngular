import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInputComponent } from './country-input.component';

describe('CountryInputComponent', () => {
  let component: CountryInputComponent;
  let fixture: ComponentFixture<CountryInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryInputComponent]
    });
    fixture = TestBed.createComponent(CountryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
