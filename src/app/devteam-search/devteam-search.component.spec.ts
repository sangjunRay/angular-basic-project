import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevteamSearchComponent } from './devteam-search.component';

describe('DevteamSearchComponent', () => {
  let component: DevteamSearchComponent;
  let fixture: ComponentFixture<DevteamSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevteamSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevteamSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
