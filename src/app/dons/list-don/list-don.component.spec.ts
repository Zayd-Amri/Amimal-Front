import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonComponent } from './list-don.component';

describe('ListDonComponent', () => {
  let component: ListDonComponent;
  let fixture: ComponentFixture<ListDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
