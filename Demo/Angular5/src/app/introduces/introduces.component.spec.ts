import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducesComponent } from './introduces.component';

describe('IntroducesComponent', () => {
  let component: IntroducesComponent;
  let fixture: ComponentFixture<IntroducesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
