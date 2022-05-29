import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdoptionComponent } from './update-adoption.component';

describe('UpdateAdoptionComponent', () => {
  let component: UpdateAdoptionComponent;
  let fixture: ComponentFixture<UpdateAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
