import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevteamsComponent } from './devteams.component';

describe('DevteamsComponent', () => {
  let component: DevteamsComponent;
  let fixture: ComponentFixture<DevteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevteamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
