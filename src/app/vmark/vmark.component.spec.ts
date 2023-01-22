import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmarkComponent } from './vmark.component';

describe('VmarkComponent', () => {
  let component: VmarkComponent;
  let fixture: ComponentFixture<VmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
