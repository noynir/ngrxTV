import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesViewContainerComponent } from './series-view-container.component';

describe('SeriesViewContainerComponent', () => {
  let component: SeriesViewContainerComponent;
  let fixture: ComponentFixture<SeriesViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
