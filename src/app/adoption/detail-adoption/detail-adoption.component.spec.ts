import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAdoptionComponent } from './detail-adoption.component';

describe('DetailAdoptionComponent', () => {
  let component: DetailAdoptionComponent;
  let fixture: ComponentFixture<DetailAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
