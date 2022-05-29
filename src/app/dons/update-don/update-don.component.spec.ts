import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDonComponent } from './update-don.component';

describe('UpdateDonComponent', () => {
  let component: UpdateDonComponent;
  let fixture: ComponentFixture<UpdateDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
