import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheThoughtComponent } from './the-thought.component';

describe('TheThoughtComponent', () => {
  let component: TheThoughtComponent;
  let fixture: ComponentFixture<TheThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheThoughtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
