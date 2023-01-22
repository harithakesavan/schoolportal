import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddattendComponent } from './addattend.component';

describe('AddattendComponent', () => {
  let component: AddattendComponent;
  let fixture: ComponentFixture<AddattendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddattendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddattendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
