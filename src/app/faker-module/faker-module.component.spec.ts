import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakerModuleComponent } from './faker-module.component';

describe('FakerModuleComponent', () => {
  let component: FakerModuleComponent;
  let fixture: ComponentFixture<FakerModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakerModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
