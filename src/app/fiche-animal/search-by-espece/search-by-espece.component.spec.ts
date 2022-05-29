import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByEspeceComponent } from './search-by-espece.component';

describe('SearchByEspeceComponent', () => {
  let component: SearchByEspeceComponent;
  let fixture: ComponentFixture<SearchByEspeceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByEspeceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
