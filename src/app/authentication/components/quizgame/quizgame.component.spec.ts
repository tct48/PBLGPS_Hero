import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizgameComponent } from './quizgame.component';

describe('QuizgameComponent', () => {
  let component: QuizgameComponent;
  let fixture: ComponentFixture<QuizgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
