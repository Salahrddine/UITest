import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepComponentComponent } from './rep-component.component';

describe('RepComponentComponent', () => {
  let component: RepComponentComponent;
  let fixture: ComponentFixture<RepComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
