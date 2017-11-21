import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotShelfComponent } from './pot-shelf.component';

describe('PotShelfComponent', () => {
  let component: PotShelfComponent;
  let fixture: ComponentFixture<PotShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
