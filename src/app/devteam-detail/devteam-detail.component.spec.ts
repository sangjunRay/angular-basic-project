import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevteamDetailComponent } from './devteam-detail.component';

describe('DevteamDetailComponent', () => {
  let component: DevteamDetailComponent;
  let fixture: ComponentFixture<DevteamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevteamDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevteamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
