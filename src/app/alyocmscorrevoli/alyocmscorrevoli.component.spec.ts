import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyoCmScorrevoliComponent } from './alyocmscorrevoli.component';

describe('AlyoCmScorrevoliComponent', () => {
  let component: AlyoCmScorrevoliComponent;
  let fixture: ComponentFixture<AlyoCmScorrevoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyoCmScorrevoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlyoCmScorrevoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
