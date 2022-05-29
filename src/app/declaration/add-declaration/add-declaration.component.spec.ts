import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeclarationComponent } from './add-declaration.component';

describe('AddDeclarationComponent', () => {
  let component: AddDeclarationComponent;
  let fixture: ComponentFixture<AddDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
