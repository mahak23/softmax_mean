import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkCreateComponent } from './homework-create.component';

describe('HomeworkCreateComponent', () => {
  let component: HomeworkCreateComponent;
  let fixture: ComponentFixture<HomeworkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
