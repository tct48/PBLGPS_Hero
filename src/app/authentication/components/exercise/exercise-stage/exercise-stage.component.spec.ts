import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseStageComponent } from './exercise-stage.component';

describe('ExerciseStageComponent', () => {
  let component: ExerciseStageComponent;
  let fixture: ComponentFixture<ExerciseStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
