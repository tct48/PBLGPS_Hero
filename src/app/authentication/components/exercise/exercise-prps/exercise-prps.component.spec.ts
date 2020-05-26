import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePrpsComponent } from './exercise-prps.component';

describe('ExercisePrpsComponent', () => {
  let component: ExercisePrpsComponent;
  let fixture: ComponentFixture<ExercisePrpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisePrpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisePrpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
