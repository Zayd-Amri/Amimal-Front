import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFicheAmimalComponent } from './delete-fiche-amimal.component';

describe('DeleteFicheAmimalComponent', () => {
  let component: DeleteFicheAmimalComponent;
  let fixture: ComponentFixture<DeleteFicheAmimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFicheAmimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFicheAmimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
