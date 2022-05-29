import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdoptionComponent } from './add-adoption.component';

describe('AddAdoptionComponent', () => {
  let component: AddAdoptionComponent;
  let fixture: ComponentFixture<AddAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
