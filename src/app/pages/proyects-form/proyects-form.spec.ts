import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsForm } from './proyects-form';

describe('ProyectsForm', () => {
  let component: ProyectsForm;
  let fixture: ComponentFixture<ProyectsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectsForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectsForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
