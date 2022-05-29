import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDonComponent } from './delete-don.component';

describe('DeleteDonComponent', () => {
  let component: DeleteDonComponent;
  let fixture: ComponentFixture<DeleteDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
