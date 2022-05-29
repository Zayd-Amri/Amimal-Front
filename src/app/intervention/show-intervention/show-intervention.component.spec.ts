import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInterventionComponent } from './show-intervention.component';

describe('ShowInterventionComponent', () => {
  let component: ShowInterventionComponent;
  let fixture: ComponentFixture<ShowInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
