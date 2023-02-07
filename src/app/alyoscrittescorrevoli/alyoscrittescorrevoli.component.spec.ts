import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyoScritteScorrevoliComponent } from './alyoscrittescorrevoli.component';

describe('AlyoScritteScorrevoliComponent', () => {
  let component: AlyoScritteScorrevoliComponent;
  let fixture: ComponentFixture<AlyoScritteScorrevoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyoScritteScorrevoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlyoScritteScorrevoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
