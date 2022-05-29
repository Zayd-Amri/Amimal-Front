import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeclarationComponent } from './show-declaration.component';

describe('ShowDeclarationComponent', () => {
  let component: ShowDeclarationComponent;
  let fixture: ComponentFixture<ShowDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
