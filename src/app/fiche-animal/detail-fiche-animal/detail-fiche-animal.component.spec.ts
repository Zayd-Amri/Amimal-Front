import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFicheAnimalComponent } from './detail-fiche-animal.component';

describe('DetailFicheAnimalComponent', () => {
  let component: DetailFicheAnimalComponent;
  let fixture: ComponentFixture<DetailFicheAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFicheAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFicheAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
