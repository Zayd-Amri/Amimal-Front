import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdoptionComponent } from './delete-adoption.component';

describe('DeleteAdoptionComponent', () => {
  let component: DeleteAdoptionComponent;
  let fixture: ComponentFixture<DeleteAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
