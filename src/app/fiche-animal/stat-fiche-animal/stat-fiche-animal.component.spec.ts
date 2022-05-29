import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatFicheAnimalComponent } from './stat-fiche-animal.component';

describe('StatFicheAnimalComponent', () => {
  let component: StatFicheAnimalComponent;
  let fixture: ComponentFixture<StatFicheAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatFicheAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatFicheAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
