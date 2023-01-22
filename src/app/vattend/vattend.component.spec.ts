import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VattendComponent } from './vattend.component';

describe('VattendComponent', () => {
  let component: VattendComponent;
  let fixture: ComponentFixture<VattendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VattendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VattendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
