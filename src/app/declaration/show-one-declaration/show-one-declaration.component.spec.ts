import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneDeclarationComponent } from './show-one-declaration.component';

describe('ShowOneDeclarationComponent', () => {
  let component: ShowOneDeclarationComponent;
  let fixture: ComponentFixture<ShowOneDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOneDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
