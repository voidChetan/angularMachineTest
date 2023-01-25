import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLayoutComponent } from './auto-layout.component';

describe('AutoLayoutComponent', () => {
  let component: AutoLayoutComponent;
  let fixture: ComponentFixture<AutoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
