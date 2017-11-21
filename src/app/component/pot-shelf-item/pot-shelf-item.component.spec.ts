import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotShelfItemComponent } from './pot-shelf-item.component';

describe('PotShelfItemComponent', () => {
  let component: PotShelfItemComponent;
  let fixture: ComponentFixture<PotShelfItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotShelfItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotShelfItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
