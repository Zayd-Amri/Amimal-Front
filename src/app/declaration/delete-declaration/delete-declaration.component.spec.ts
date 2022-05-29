import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeclarationComponent } from './delete-declaration.component';

describe('DeleteDeclarationComponent', () => {
  let component: DeleteDeclarationComponent;
  let fixture: ComponentFixture<DeleteDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
