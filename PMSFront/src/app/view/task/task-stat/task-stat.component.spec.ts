import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatComponent } from './task-stat.component';

describe('TaskStatComponent', () => {
  let component: TaskStatComponent;
  let fixture: ComponentFixture<TaskStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
