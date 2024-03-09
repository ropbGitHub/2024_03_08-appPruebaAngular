import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BySubregionComponent } from './by-subregion.component';

describe('BySubregionComponent', () => {
  let component: BySubregionComponent;
  let fixture: ComponentFixture<BySubregionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BySubregionComponent]
    });
    fixture = TestBed.createComponent(BySubregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
