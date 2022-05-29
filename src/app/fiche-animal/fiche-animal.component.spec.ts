import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAnimalComponent } from './fiche-animal.component';

describe('FicheAnimalComponent', () => {
  let component: FicheAnimalComponent;
  let fixture: ComponentFixture<FicheAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
