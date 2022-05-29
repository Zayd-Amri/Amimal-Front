import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRefugeComponent } from './show-refuge.component';

describe('ShowRefugeComponent', () => {
  let component: ShowRefugeComponent;
  let fixture: ComponentFixture<ShowRefugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRefugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRefugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
