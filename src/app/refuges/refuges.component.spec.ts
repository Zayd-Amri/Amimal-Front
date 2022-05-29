import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugesComponent } from './refuges.component';

describe('RefugesComponent', () => {
  let component: RefugesComponent;
  let fixture: ComponentFixture<RefugesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefugesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
