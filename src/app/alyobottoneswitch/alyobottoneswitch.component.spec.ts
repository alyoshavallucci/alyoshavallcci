import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyobottoneswitchComponent } from './alyobottoneswitch.component';

describe('AlyobottoneswitchComponent', () => {
  let component: AlyobottoneswitchComponent;
  let fixture: ComponentFixture<AlyobottoneswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyobottoneswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlyobottoneswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
