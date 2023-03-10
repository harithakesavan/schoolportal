import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenthomeComponent } from './parenthome.component';

describe('ParenthomeComponent', () => {
  let component: ParenthomeComponent;
  let fixture: ComponentFixture<ParenthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
