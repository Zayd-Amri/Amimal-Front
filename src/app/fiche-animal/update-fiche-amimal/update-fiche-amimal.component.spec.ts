import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFicheAmimalComponent } from './update-fiche-amimal.component';

describe('UpdateFicheAmimalComponent', () => {
  let component: UpdateFicheAmimalComponent;
  let fixture: ComponentFixture<UpdateFicheAmimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFicheAmimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFicheAmimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
