import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFicheAmimalComponent } from './add-fiche-amimal.component';

describe('AddFicheAmimalComponent', () => {
  let component: AddFicheAmimalComponent;
  let fixture: ComponentFixture<AddFicheAmimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFicheAmimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFicheAmimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
