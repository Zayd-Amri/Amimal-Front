import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByEtatComponent } from './search-by-etat.component';

describe('SearchByEtatComponent', () => {
  let component: SearchByEtatComponent;
  let fixture: ComponentFixture<SearchByEtatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByEtatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
