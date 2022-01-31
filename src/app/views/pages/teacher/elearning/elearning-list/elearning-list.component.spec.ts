import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElearningListComponent } from './elearning-list.component';

describe('ElearningListComponent', () => {
  let component: ElearningListComponent;
  let fixture: ComponentFixture<ElearningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElearningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElearningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
