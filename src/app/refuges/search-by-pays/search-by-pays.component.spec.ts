import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPaysComponent } from './search-by-pays.component';

describe('SearchByPaysComponent', () => {
  let component: SearchByPaysComponent;
  let fixture: ComponentFixture<SearchByPaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByPaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
