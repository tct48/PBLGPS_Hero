import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpsQuizComponent } from './prps-quiz.component';

describe('PrpsQuizComponent', () => {
  let component: PrpsQuizComponent;
  let fixture: ComponentFixture<PrpsQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrpsQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
