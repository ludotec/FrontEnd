import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSocialComponent } from './logo-social.component';

describe('LogoSocialComponent', () => {
  let component: LogoSocialComponent;
  let fixture: ComponentFixture<LogoSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
