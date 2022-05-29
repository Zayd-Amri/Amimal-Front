import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRefugeComponent } from './update-refuge.component';

describe('UpdateRefugeComponent', () => {
  let component: UpdateRefugeComponent;
  let fixture: ComponentFixture<UpdateRefugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRefugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRefugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
