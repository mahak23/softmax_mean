import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkListingComponent } from './homework-listing.component';

describe('HomeworkListingComponent', () => {
  let component: HomeworkListingComponent;
  let fixture: ComponentFixture<HomeworkListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
