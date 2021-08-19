import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereamiComponent } from './whereami.component';

describe('WhereamiComponent', () => {
  let component: WhereamiComponent;
  let fixture: ComponentFixture<WhereamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
