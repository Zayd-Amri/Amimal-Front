import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByVilleComponent } from './search-by-ville.component';

describe('SearchByVilleComponent', () => {
  let component: SearchByVilleComponent;
  let fixture: ComponentFixture<SearchByVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
