import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeclarationByDateComponent } from './show-declaration-by-date.component';

describe('ShowDeclarationByDateComponent', () => {
  let component: ShowDeclarationByDateComponent;
  let fixture: ComponentFixture<ShowDeclarationByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeclarationByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeclarationByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
