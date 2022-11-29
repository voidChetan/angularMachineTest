import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTest1Component } from './machine-test1.component';

describe('MachineTest1Component', () => {
  let component: MachineTest1Component;
  let fixture: ComponentFixture<MachineTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineTest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
