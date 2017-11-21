import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPotComponent } from './action-pot.component';

describe('ActionPotComponent', () => {
  let component: ActionPotComponent;
  let fixture: ComponentFixture<ActionPotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
