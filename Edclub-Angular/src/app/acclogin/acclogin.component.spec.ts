import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccloginComponent } from './acclogin.component';

describe('AccloginComponent', () => {
  let component: AccloginComponent;
  let fixture: ComponentFixture<AccloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
