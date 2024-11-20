import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectComponent } from './section-select.component';

describe('SectionSelectComponent', () => {
  let component: SectionSelectComponent;
  let fixture: ComponentFixture<SectionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
