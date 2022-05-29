import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByRaceComponent } from './search-by-race.component';

describe('SearchByRaceComponent', () => {
  let component: SearchByRaceComponent;
  let fixture: ComponentFixture<SearchByRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
