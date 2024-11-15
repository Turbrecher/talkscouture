import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DearFashionComponent } from './dear-fashion.component';

describe('DearFashionComponent', () => {
  let component: DearFashionComponent;
  let fixture: ComponentFixture<DearFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DearFashionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DearFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
