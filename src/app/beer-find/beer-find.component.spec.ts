import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFindComponent } from './beer-find.component';

describe('BeerFindComponent', () => {
  let component: BeerFindComponent;
  let fixture: ComponentFixture<BeerFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
